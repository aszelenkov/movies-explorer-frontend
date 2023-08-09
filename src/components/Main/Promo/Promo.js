import React from 'react';
import promoImg from '../../../images/promo-img.svg';
import './Promo.css'

function Promo() {
  return(
    <section className='promo promo_large'>
      <img src={promoImg} alt='Лого проекта' className='promo__logo'/>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  )
}

export default Promo;