import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter'>
      <label className='filter__label'>
        <input className='filter__checkbox' type='checkbox'
        />
        <span className='filter__slider'>Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
