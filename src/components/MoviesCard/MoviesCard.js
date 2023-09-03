import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { MOVIES_BASE_URL } from "../../utils/constants";
import { changeTimeDuration } from "../../utils/utils";

function MoviesCard({
  card,
  onLikeCard,
  onDeleteCard,
  saved,
  savedMovies,
}) {
  const location = useLocation();

  const handleDeleteCard = () => {
    onDeleteCard(card);
  };
  
  const onCardClick = () => {
    if (saved) {
      onDeleteCard(savedMovies.filter((c) => c.movieId === card.id)[0]);
    } else {
      onLikeCard(card);
    }
  };
  
  const imageUrl =
    typeof card.image === "string" && card.image.startsWith("http")
      ? card.image
      : `${MOVIES_BASE_URL}${card.image.url}`;

  const cardLikeButtonClassName = `${
    saved ? "moviesCard__like moviesCard__like_active" : "moviesCard__like"
  }`;

  return (
    <li className="moviesCard">
      <a
        className="moviesCard__link"
        href={card.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="moviesCard__photo" src={imageUrl} alt={card.nameRU} />
      </a>
      <div className="moviesCard__title-block">
        <h2 className="moviesCard__title">{card.nameRU}</h2>
        <p className="moviesCard__subtitle-time">
          {changeTimeDuration(card.duration)}
        </p>
      </div>
      <div className="moviesCard__like-block">
        {location.pathname === "/saved-movies" ? (
          <button
            className="moviesCard__trash"
            type="button"
            aria-label="Удалить карточку фильма из сохраненных"
            onClick={handleDeleteCard}
          ></button>
        ) : (
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Нравится"
            onClick={onCardClick}
          ></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;