import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer footer__large'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__wrapper'>
        <p className='footer__date'>&copy; {new Date().getFullYear()}</p>
        <nav>
          <ul className='footer__list list'>
            <li className='footer__links-element'>
              <Link
                to='//practicum.yandex.ru'
                className='footer__link link-hover'
                target='_blank'
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className='footer__links-element'>
              <Link
                to='//github.com/aszelenkov'
                className='footer__link link-hover'
                target='_blank'
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
