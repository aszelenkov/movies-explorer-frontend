import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
     <section className='portfolio portfolio_large'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <ul className='portfolio__list list'>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link link-hover'
            to='//github.com/aszelenkov/how-to-learn'
            target='_blank'
          >
            Статичный сайт
            <span className='portfolio__icon'>↗</span>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link link-hover'
            to='//github.com/aszelenkov/russian-travel'
            target='_blank'
          >
            Адаптивный сайт
            <span className='portfolio__icon'>↗</span>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link link-hover'
            to='//github.com/aszelenkov/react-mesto-api-full-gha'
            target='_blank'
          >
            Одностраничное приложение
            <span className='portfolio__icon'>↗</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
