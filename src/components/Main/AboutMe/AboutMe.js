import './AboutMe.css';
import React from 'react';
import { Link } from 'react-router-dom';
import studentPic from '../../../images/student-pic.png';

function AboutMe() {
  return (
    <section className='about-me about-me_large' id='about-me'>
      <h1 className='about-me__title'>Студент</h1>
      <div className='about-me__info'>
        <div className='about-me__info-container'>
          <h3 className='about-me__info-title-name'>Александр</h3>
          <p className='about-me__info-subtitle-job'>
            Фронтенд-разработчик, 34 года
          </p>
          <p className='about-me__info-description'>
          Год назад я начал обучение веб-разработке в Яндекс Практикуме, ранее специализировался на сайтах CMS WordPress. Разработал сайт с личным кабинетом и интернет-магазин цветов, успешно запустив партнерскую программу с SEO. Во время обучения освоил технологии, включая HTML, CSS, JavaScript, React и приобрел навыки командной работы. В свободное время решаю задачи на CodeWars, изучаю нейросети, также веду активность в клубе предпринимателей club.org.
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
