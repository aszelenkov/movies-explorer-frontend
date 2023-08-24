import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import { filterMoviesByTitle, filterMoviesByDuration } from "../../utils/utils";

function SavedMovies({ savedMovies, onDeleteCard }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchQueryChange(query) {
    setSearchQuery(query);
  }

  function handleFilterShortSavedMovies() {
    setIsShortMovie(!isShortMovie);
  }

  useEffect(() => {
    const filteredMoviesByTitle = filterMoviesByTitle(savedMovies, searchQuery);
    const filteredMoviesList = isShortMovie
      ? filterMoviesByDuration(filteredMoviesByTitle)
      : filteredMoviesByTitle;
    setFilteredMovies(filteredMoviesList);
  }, [savedMovies, isShortMovie, searchQuery]);

  useEffect(() => {
    setIsNotFound(filteredMovies.length === 0);
  }, [filteredMovies]);

  return (
    <main
      className="savedMovies savedMovies_large"
      aria-label="Сохраненные фильмы"
    >
      <SearchForm
        onSearchMovies={handleSearchQueryChange}
        onFilterMovies={handleFilterShortSavedMovies}
      />
      <MoviesCardList
        isNotFound={isNotFound}
        isSavedMovies={true}
        cards={filteredMovies}
        savedMovies={savedMovies}
        onDeleteCard={onDeleteCard}
      />
    </main>
  );
}

export default SavedMovies;
