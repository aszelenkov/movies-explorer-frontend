import './Movies.css';
import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
      <main className='page__main page__main_screen_movies'>
        <SearchForm />
        <MoviesCardList />
      </main>
  );
}

export default Movies;