import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';
import profileIcon from '../../images/user-icon.svg';

function UserProfile() {
  return (
    <div className='user-profile'>
      <div className='user-profile__wrapper'>
        <button className='user-profile__overlap-group link-hover'>
          <Link to='/profile' className='user-profile__text '>Аккаунт</Link>
          <div className='user-profile__overlap'>
            <img className='user-profile__icon' alt='Иконка профиля' src={profileIcon} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default UserProfile;

