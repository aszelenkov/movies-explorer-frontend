import './NavBar.css';
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='nav-bar nav-bar__container'>
      <ul className='nav-bar__links list'>
        <li>
          <button className='nav-bar__button' type='button'>
            <Link
              className='nav-bar__link link-hover'
              to='/signup'>
              Регистрация
            </Link>
          </button>
        </li>
        <li>
          <button className='nav-bar__button' type='button'>
            <Link
              className='nav-bar__link nav-bar__link-login link-hover'
              to='/signin'
            >
              Войти
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
