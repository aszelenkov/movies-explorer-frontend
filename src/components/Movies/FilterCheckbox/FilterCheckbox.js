import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterMovies, isShortMovies }) {
  return (
    <div className='filter'>
      <label className='filter__label'>
        <input 
          className='filter__checkbox' 
          type='checkbox' 
          checked={isShortMovies}
          onChange={onFilterMovies}
        />
        <span className='filter__slider'>Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;