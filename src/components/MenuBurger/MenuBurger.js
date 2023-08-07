import './MenuBurger.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function MenuBurger() {
  const [isOpenedMenuBurger, setIsOpenedMenuBurger] = React.useState(false);

  const handleMenuClick = () => {
    setIsOpenedMenuBurger(!isOpenedMenuBurger);
  }

  return (
    <div className='menu-burger'>
      <Navigation isOpenedMenuBurger={isOpenedMenuBurger} />
      <div className={isOpenedMenuBurger ? 'menu-burger__overlay_active menu-burger__overlay' : 'menu-burger__overlay'}></div>
      <button
        className={`menu-burger__button button-hover ${isOpenedMenuBurger ? 'menu-burger__button_close' : ''}`}
        type='button'
        onClick={handleMenuClick}
      >
        <span className='menu-burger__button-line'></span>
      </button>
    </div>
  );
}

export default MenuBurger;