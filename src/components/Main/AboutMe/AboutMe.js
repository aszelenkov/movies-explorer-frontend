import './AboutMe.css';
import React from 'react';
import { Link } from 'react-router-dom';
import studentPic from '../../../images/student-pic.png';

function AboutMe() {
  return (
    <section className='about-me about-me_size_l' id='about-me'>
      <h1 className='about-me__title'>Студент</h1>
      <div className='about-me__info'>
        <div className='about-me__info-container'>
          <h3 className='about-me__info-title-name'>Виталий</h3>
          <p className='about-me__info-subtitle-job'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='about-me__info-description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У&nbsp;меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё
            увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в
            компании «СКБ Контур». После того, как прошёл курс по
            веб&#8209;разработке, начал заниматься фриланс&#8209;заказами
            и&nbsp;ушёл с постоянной работы.
          </p>
          <Link
            className='about-me__info-link link-hover'
            to='https://github.com/aszelenkov'
            target='_blank'
          >
            Github
          </Link>
        </div>
        <img className='about-me__photo' src={studentPic} alt='Фото студента' />
      </div>
    </section>
  );
}

export default AboutMe;
