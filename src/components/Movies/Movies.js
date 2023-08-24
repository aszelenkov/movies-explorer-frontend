import "./Movies.css";
import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { filterMoviesByTitle, filterMoviesByDuration } from "../../utils/utils";
import * as MoviesApi from "../../utils/MoviesApi";
import { KEYS } from "../../utils/constants";

function Movies({ onLikeCard, onDeleteCard, savedMovies }) {
  const [showMovies, setShowMovies] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const resetShowMovies = (component) => {
    if (component === "movies") {
      setShowMovies();
    }
  };

  const updateFilterMovies = (movies, query, short) => {
    const moviesCards = filterMoviesByTitle(movies, query, short);
    setOriginalMovies(moviesCards);
    setFilteredMovies(
      short 
      ? filterMoviesByDuration(moviesCards) 
      : moviesCards
    );
    localStorage.setItem(KEYS.MOVIES, JSON.stringify(moviesCards));
    localStorage.setItem(KEYS.ALL_MOVIES, JSON.stringify(movies));
  };

  const handleFilterShortMovies = () => {
    const newIsShortMovies = !isShortMovies;
    setIsShortMovies(newIsShortMovies);
    localStorage.setItem(KEYS.SHORT_MOVIES, newIsShortMovies);
    setFilteredMovies(
      newIsShortMovies
        ? filterMoviesByDuration(originalMovies)
        : originalMovies
    );
  };

  useEffect(() => {
    setIsShortMovies(localStorage.getItem(KEYS.SHORT_MOVIES) === "true");
  }, []);

  const handleSearchMovies = async (query) => {
    localStorage.setItem(KEYS.MOVIE_SEARCH, query);
    localStorage.setItem(KEYS.SHORT_MOVIES, isShortMovies);
    try {
      setIsLoading(true);
      const moviesData = localStorage.getItem(KEYS.ALL_MOVIES);
      let cardsData;
      if (moviesData) {
        cardsData = JSON.parse(moviesData);
      } else {
        cardsData = await MoviesApi.getMovies();
      }
      updateFilterMovies(cardsData, query, isShortMovies);
      setIsSearchError(false);
    } catch (err) {
      setIsSearchError(true);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const moviesData = localStorage.getItem(KEYS.MOVIES);
    if (moviesData) {
      const movies = JSON.parse(moviesData);
      setOriginalMovies(movies);
      setFilteredMovies(
        isShortMovies 
        ? filterMoviesByDuration(movies) 
        : movies
      );
    }
  }, [isShortMovies]);

  useEffect(() => {
    setIsNotFound(
      filteredMovies.length === 0 && localStorage.getItem(KEYS.MOVIE_SEARCH)
    );
  }, [filteredMovies]);

  useEffect(() => {
    if (originalMovies.length) {
      const updatedFilteredMovies = isShortMovies
        ? filterMoviesByDuration(originalMovies)
        : originalMovies;
      setFilteredMovies(updatedFilteredMovies);
    }
  }, [originalMovies, isShortMovies]);

  return (
    <main className="movies movies_large" aria-label="Фильмы">
      <SearchForm
        onSearchMovies={handleSearchMovies}
        onFilterMovies={handleFilterShortMovies}
        isShortMovies={isShortMovies}
        resetShowMovies={resetShowMovies}
      />
      <MoviesCardList
        cards={filteredMovies}
        isLoading={isLoading}
        isSavedMovies={false}
        isSearchError={isSearchError}
        isNotFound={isNotFound}
        savedMovies={savedMovies}
        onLikeCard={onLikeCard}
        onDeleteCard={onDeleteCard}
        resetShowMovies={resetShowMovies}
      />
    </main>
  );
}

export default Movies;
