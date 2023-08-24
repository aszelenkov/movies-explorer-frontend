import './Header.css';
import React from 'react';
import Logo from '../Logo/Logo';
import { useLocation } from 'react-router-dom';
import MenuBurger from '../MenuBurger/MenuBurger';
import NavBar from '../Navigation/NavBar/NavBar';

function Header({ loggedIn }) {
  const location = useLocation();
  
  const getHeaderClassName = () => {
    return location.pathname === '/' ? 'header header_landing' : 'header header_main';
  };

  return (
    <header className={getHeaderClassName()}>
      <div className='header__wrapper'>
        <Logo/>
        {!loggedIn ? (
          <NavBar />
        ) : (
        <MenuBurger />
       )
     }
      </div>
    </header>
  );
}

export default Header;
