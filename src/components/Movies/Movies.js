import './Movies.css';
import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
      <main className='movies movies_large'>
        <SearchForm />
        <MoviesCardList />
      </main>
  );
}

export default Movies;