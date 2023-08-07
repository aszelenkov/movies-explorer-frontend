import React from 'react';
import './NavTab.css';

function NavTab() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='nav-tab nav-tab_size_l'>
      <ul className='nav-tab__list list'>
        <li>
          <button onClick={() => scrollToSection('about-project')} className='nav-tab__button button-hover'>
            О проекте
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('techs')} className='nav-tab__button button-hover'>
            Технологии
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about-me')} className='nav-tab__button button-hover'>
            Студент
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;