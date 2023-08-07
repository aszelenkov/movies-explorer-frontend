import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import picColorPic from '../../../images/pic-color-pic.jpg';

function MoviesCard() {
  const location = useLocation();
  const [liked, setLiked] = useState(false);


  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <li className="moviesCard__item">
      <img className="moviesCard__photo" 
        src={picColorPic}
        alt='Фото карточки'
      />
      <div className='moviesCard__title-block'>
        <h2 className="moviesCard__title">В погоне за Бенкси</h2>
        <p className='moviesCard__subtitle-time'>1ч 42м</p>
      </div>
      <div className="moviesCard__like-block">
        {location.pathname === '/saved-movies' ? (
          <button 
            className="moviesCard__trash"
            type="button"
            aria-label='Удалить'
            >
          </button>
        ) : (
          <button 
            className={liked ? 'moviesCard__like moviesCard__like_active' : 'moviesCard__like'}
            type="button"
            aria-label='Нравится'
            onClick={handleLikeClick}
          ></button>
          )}
      </div>
    </li>
  );
}

export default MoviesCard;
