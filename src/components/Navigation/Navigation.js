import './Navigation.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserProfile from '../UserProfile/UserProfile';

function Navigation({ isOpenedMenuBurger }) {
  const location = useLocation().pathname;

  return (
    <nav
      className={`navigation ${
        isOpenedMenuBurger ? 'navigation_active' : ''
      }`}
    >
      <ul className='navigation__list list'>
        <li className='navigation__item navigation__item_hidden'>
          <Link
            to='/'
            className={`navigation__link link-hover ${
              location === '/' && 'navigation__link_active'
            }`}
          >
            Главная
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/movies'
            className={`navigation__link link-hover ${
              location === '/movies' && 'navigation__link_active'
            }`}
          >
            Фильмы
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/saved-movies'
            className={`navigation__link link-hover ${
              location === '/saved-movies' && 'navigation__link_active'
            }`}
          >
            Сохранённые&nbsp;фильмы
          </Link>
        </li>
      </ul>
      <UserProfile />
    </nav>
  );
}

export default Navigation;
