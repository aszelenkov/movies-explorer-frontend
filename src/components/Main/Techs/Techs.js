import './Techs.css'
import React from 'react';

function Techs() {
  return (
    <section className='techs techs__large' id='techs'>
      <h1 className='techs__title'>Технологии</h1>
      <h3 className='techs__info-title'>7&nbsp;технологий</h3>
      <p className='techs__info-subtitle'>На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили
        в дипломном проекте.</p>
      <ul className='techs__list list'>
        <li className='techs__list-item'>HTML</li>
        <li className='techs__list-item'>CSS</li>
        <li className='techs__list-item'>JS</li>
        <li className='techs__list-item'>React</li>
        <li className='techs__list-item'>Git</li>
        <li className='techs__list-item'>Express.js</li>
        <li className='techs__list-item'>mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;