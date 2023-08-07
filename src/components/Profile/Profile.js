import React, { useState, useEffect, useContext } from 'react';
import './Profile.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLogoutHidden, setIsLogoutHidden] = useState(false);
  const [profileName, setProfileName] = useState('Виталий');
  const [profileEmail, setProfileEmail] = useState('pochta@yandex.ru');
  const { user } = useContext(CurrentUserContext) || {};
  const [isServerError, setIsServerError] = useState(false);

  const {
    values, 
    handleChange, 
    errors, 
    isValid, 
    resetForm, 
    setValues, 
    setIsValid 
  } = useFormAndValidation();

  useEffect(() => {
    if (user && user.name && user.email) {
      setValues({
        profileName: user.name,
        profileEmail: user.email
      });
    }
  }, [user, setValues]);

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setIsLogoutHidden(true);
  };

  const handleSaveButtonClick = (e) => {
    e.preventDefault();
    setIsServerError(true);
    setIsEditing(false);
    setIsLogoutHidden(false);
  };

  const handleLogoutButtonClick = () => {
  };

  const handleNameChange = (event) => {
    setProfileName(event.target.value);
    handleChange(event);
  };

  const handleEmailChange = (event) => {
    setProfileEmail(event.target.value);
    handleChange(event);
  };

  return (
    <main className='page__main'>
      <section className='profile'>
        <div className='profile__wrapper'>
          <h1 className='profile__title'>Привет, Виталий!</h1>

          <form 
            className='profile__form'
            name='profile-form'
            noValidate
            onSubmit={handleSaveButtonClick}
          >
            <label className='profile-form__label'>
              <span className='profile-form__input-title input-focus'>Имя</span>
              <input
                className='profile-form__input'
                type='text'
                value={profileName}
                name='profileName'
                id='input-profile-name'
                placeholder='Имя'
                required
                minLength='3'
                maxLength='40'
                readOnly={!isEditing}
                onChange={handleNameChange}
              />
            </label>
            <span className='profile-form__input-error'>{errors.profileName}</span>
            <label className='profile-form__label'>
              <span className='profile-form__input-title'>E-mail</span>
              <input
                className='profile-form__input'
                type='email'
                value={profileEmail}
                name='profileEmail'
                id='input-profile-email'
                placeholder='E-mail'
                required
                readOnly={!isEditing}
                onChange={handleEmailChange}
              />
            </label>
            <span className='profile-form__input-error'>{errors.profileEmail}</span>
          </form>

          <div className='profile__button-wrapper'>
            <p className='profile__server-error'>{isServerError && 'При обновлении профиля произошла ошибка.'}</p>
            {isEditing ? (
              <button 
                className={`profile__button-save button-hover ${!isValid ? 'profile__button-save_disabled' : ''}`} 
                type='submit' 
                disabled={!isValid}
                onClick={handleSaveButtonClick}>
                Сохранить
              </button>
            ) : (
              <>
                <button 
                  className='profile__button-edit button-hover' 
                  type='button' 
                  onClick={handleEditButtonClick}>
                  Редактировать
                </button>
                {!isLogoutHidden && (
                  <button 
                    className='profile__button-exit button-hover' 
                    type='button' 
                    onClick={handleLogoutButtonClick}>
                    Выйти из аккаунта
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;