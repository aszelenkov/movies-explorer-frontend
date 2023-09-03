import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import LandingPromo from "../Screens/LandingPromo/LandingPromo";
import MoviesScreen from "../Screens/MoviesScreen/MoviesScreen";
import SavedMoviesScreen from "../Screens/SavedMoviesScreen/SavedMoviesScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import Login from "../Screens/Login/Login";
import Register from "../Screens/Register/Register";
import NotFound from "../Screens/NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { usePopupState } from "../../hooks/customHooks";
import { FEEDBACK_MSG, KEYS } from "../../utils/constants";
import * as auth from "../../utils/auth";
import * as MainApi from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isTokenChecked, setTokenChecked] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  const updateUser = (name, email) => {
    setCurrentUser((prevState) => ({ ...prevState, name, email }));
  };
  const handleTokenCheck = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await auth.checkToken(token);
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
        }
      } catch (err) {
        console.error(`Ошибка: ${err}`);
      }
    }
    setTokenChecked(true);
  };

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const {
    state: popups,
    closeAllPopups,
    handlePopupStateChange,
  } = usePopupState({
    isInfoTooltipPopupOpen: false,
  });

  const handleConfirmStatus = (ok, errorText = "") => {
    handlePopupStateChange("isInfoTooltipPopupOpen", true);
    setIsSuccess(ok);
    setErrorText(errorText);
  };

  const handleCardLikeAndSave = (card) => {
    MainApi
      .createSavedMovie(card)
      .then((newMovie) => {
        setSavedMovies((prevMovies) => [newMovie, ...prevMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        handleConfirmStatus(false, err);
        console.error(`Ошибка: ${err}`);
      });
  };

  const handleCardDelete = (card) => {
    MainApi
      .deleteSavedMovie(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((i) => i._id !== card._id));
      })
      .catch((err) => {
        setIsSuccess(false);
        handleConfirmStatus(false, err);
        console.error(`Ошибка: ${err}`);
      });
  };

  useEffect(() => {
    if (loggedIn) {
      MainApi
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
        });

      MainApi
        .getSavedMovies()
        .then((cardsData) => {
          console.log("Полученный список фильмов:", cardsData);
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
        });
    }
  }, [loggedIn]);

  const handleRegister = async (name, email, password) => {
    try {
      setIsLoading(true);
      await auth.register(name, email, password);
      await handleLogin(email, password);
      await handleConfirmStatus(true, FEEDBACK_MSG.REGISTRATION_SUCCESS);
    } catch (err) {
      handleConfirmStatus(false, err);
      console.error(`Ошибка: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const data = await auth.loginUser(email, password);
      if (data.token) {
        await setLoggedIn(true);
        localStorage.setItem("token", data.token);
        await navigate("/movies");
      }
    } catch (err) {
      handleConfirmStatus(false, err);
      console.error(`Ошибка: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    const itemsToRemove = Object.values(KEYS);
    itemsToRemove.forEach(item => {
        if (localStorage.getItem(item)) {
            localStorage.removeItem(item);
        }
    });
    localStorage.clear();
    setLoggedIn(false);
    navigate("/", { replace: true });
};

  return (
    <CurrentUserContext.Provider value={{ currentUser, updateUser }}>
      <div className="app">
        {isTokenChecked ? (
          <>
            <Routes>
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={MoviesScreen}
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    onDeleteCard={handleCardDelete}
                    onLikeCard={handleCardLikeAndSave}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    loggedIn={loggedIn}
                    element={SavedMoviesScreen}
                    savedMovies={savedMovies}
                    onDeleteCard={handleCardDelete}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={ProfileScreen}
                    onSignOut={handleSignOut}
                    loggedIn={loggedIn}
                    handleConfirmStatus={handleConfirmStatus}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  loggedIn ? (
                    <Navigate to="/movies" />
                  ) : (
                    <Login onLogin={handleLogin} isLoading={isLoading} />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  loggedIn ? (
                    <Navigate to="/movies" />
                  ) : (
                    <Register onRegister={handleRegister} isLoading={isLoading}/>
                  )
                }
              />
              <Route path="/" element={<LandingPromo loggedIn={loggedIn} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <InfoTooltip
              isSuccess={isSuccess}
              isOpen={popups.isInfoTooltipPopupOpen}
              onClose={closeAllPopups}
              message={errorText}
              error={isSuccess ? "" : errorText}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;