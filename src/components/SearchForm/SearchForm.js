import "./SearchForm.css";
import React, { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useLocation } from "react-router-dom";
import { SEARCH_MSG, KEYS } from "../../utils/constants";

function SearchForm({ onSearchMovies, onFilterMovies, isShortMovies }) {
  const location = useLocation().pathname;
  const [isServerError, setIsServerError] = useState(false);
  const {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
    setIsValid,
  } = useFormAndValidation();

  useEffect(() => {
    if (location === "/movies" && localStorage.getItem(KEYS.MOVIE_SEARCH)) {
      setValues({ searchForm: localStorage.getItem(KEYS.MOVIE_SEARCH) });
    }
  }, [location]);
//useEffect validation
  useEffect(() => {
    setIsValid(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSearchMovies(values.searchForm);
    }
};
  
  return (
    <section className="searchForm" aria-label="Поиск карточек фильмов">
      <form
        className="searchForm__find"
        onSubmit={handleSubmit}
        noValidate
        name="searchForm"
      >
        <div className="searchForm__wrapper">
          <div className="searchForm__input-wrapper">
            <input
              className="searchForm__find-input"
              type="text"
              name="searchForm"
              id="searchForm-input"
              onChange={handleChange}
              minLength={1}
              value={values.searchForm || ""}
              placeholder="Фильм"
              required
            />
            <div className="searchForm__button-wrapper">
              <button
                className="searchForm__button button-hover"
                type="submit"
                disabled={!isValid || !values.searchForm}
              ></button>
            </div>
          </div>
        </div>
        <span
          className={`searchForm__find-input-error ${
            errors.searchForm ? "searchForm__find-input-error_active" : ""
          }`}
        >
          {isServerError || SEARCH_MSG.SEARCH_KEY_WORD}
        </span>
        <FilterCheckbox
          onFilterMovies={onFilterMovies}
          isShortMovies={isShortMovies}
        />
      </form>
    </section>
  );
}

export default SearchForm;
