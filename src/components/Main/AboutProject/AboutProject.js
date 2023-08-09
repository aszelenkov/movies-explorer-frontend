import React from 'react';
import './AboutProject.css';

const projectStages = [
  {
    title: 'Дипломный проект включал 5 этапов',
    subtitle: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  },
  {
    title: 'На выполнение диплома ушло 5 недель',
    subtitle: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
  },
];

function AboutProject() {
  return (
    <section className='about-project about-project_large'>
      <h1 className='about-project__title'>О проекте</h1>
      <ul className='about-project__info list'>
        {projectStages.map((stage, index) => (
          <li key={index} className='about-project__info-item'>
            <h3 className='about-project__info-title'>{stage.title}</h3>
            <p className='about-project__info-subtitle'>{stage.subtitle}</p>
          </li>
        ))}
      </ul>
      <ul className='about-project__progress-bar list'>
        <li className='about-project__element'>1 неделя</li>
        <li className='about-project__element'>4 недели</li>
        <li className='about-project__element'>Back-end</li>
        <li className='about-project__element'>Front-end</li>
      </ul>
    </section>
  );
}

export default AboutProject;
