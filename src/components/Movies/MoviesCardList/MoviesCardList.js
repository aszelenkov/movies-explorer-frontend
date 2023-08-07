import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
      <section 
        className='moviesCardList' 
        aria-label='Секция с карточками'
      >
        <ul className='moviesCardList__cards'
        >
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
        <button className='moviesCardList__button-still button-hover' type='button'>Ещё</button>
      </section>
  );
}

export default MoviesCardList;