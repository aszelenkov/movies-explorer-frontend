import "./SearchForm.css";
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="searchForm">
      <form 
        className="searchForm__find" 
        name="searchForm-find">
        <div className="searchForm__wrapper">
          <div className="searchForm__input-wrapper">
            <input
              className="searchForm__input"
              type="text"
              name="searchForm-input"
              id="searchForm-input"
              placeholder="Фильм"
              required
            />
            <div className="searchForm__button-wrapper">
              <button
                className="searchForm__button button-hover"
                type="submit"
              ></button>
            </div>
          </div>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
