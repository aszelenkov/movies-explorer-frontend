import "./MoviesCardList.css";
import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import SearchValid from "../SearchValid/SearchValid";
import {
  INIT_CARDS,
  MORE_CARDS,
  RESOLUTIONS,
  SEARCH_MSG,
} from "../../../utils/constants";

function MoviesCardList({
  cards,
  isLoading,
  isSavedMovies,
  savedMovies,
  isSearchError,
  isNotFound,
  onLikeCard,
  onDeleteCard,
  resetShowMovies,
}) {
  const location = useLocation().pathname;
  const [showCards, setShowCards] = useState(0);

  const showScreenResolutions = () => {
    const display = window.innerWidth;
    if (display > RESOLUTIONS.DESKTOP) {
      setShowCards(INIT_CARDS.DESKTOP);
    } else if (display > RESOLUTIONS.TABLET) {
      setShowCards(INIT_CARDS.TABLET);
    } else {
      setShowCards(INIT_CARDS.MOBILE);
    }
  };

  const handleShowMore = () => {
    const display = window.innerWidth;
    if (display > RESOLUTIONS.DESKTOP) {
      setShowCards(showCards + MORE_CARDS.DESKTOP);
    } else if (display > RESOLUTIONS.TABLET) {
      setShowCards(showCards + MORE_CARDS.TABLET);
    } else {
      setShowCards(showCards + MORE_CARDS.MOBILE);
    }
  };

  const getSavedMovieCard = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  };

  useEffect(() => {
    showScreenResolutions();
  }, [resetShowMovies]);

  useEffect(() => {
    const handleResize = () => {
      showScreenResolutions();
    };
    const timeoutId = setTimeout(() => {
      window.addEventListener("resize", handleResize);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderMovieCards = (movieArray) => {
    return movieArray.map((card) => (
      <MoviesCard
        key={isSavedMovies ? card._id : card.id}
        saved={getSavedMovieCard(savedMovies, card)}
        cards={cards}
        card={card}
        isSavedMovies={isSavedMovies}
        onLikeCard={onLikeCard}
        onDeleteCard={onDeleteCard}
        savedMovies={savedMovies}
      />
    ));
  };

  const emptySearchMessage = (
    <SearchValid titleError={SEARCH_MSG.SEARCH_NOT_FOUND} />
  );

  const serverErrorMessage = (
    <SearchValid titleError={SEARCH_MSG.SEARCH_SERVER_ERROR} />
  );

  const shouldShowMoreButton = cards.length > showCards;

  return (
    <section className="moviesCardList" aria-label="Карточки фильмов">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && emptySearchMessage}
      {isSearchError && !isLoading && serverErrorMessage}
      {!isLoading && !isSearchError && !isNotFound && (
        <>
          <ul className="moviesCardList__cards">
            {location === "/saved-movies"
              ? renderMovieCards(cards)
              : renderMovieCards(cards.slice(0, showCards))}
          </ul>
          {shouldShowMoreButton && (
            <button
              className="moviesCardList__button-still button-hover"
              onClick={handleShowMore}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
