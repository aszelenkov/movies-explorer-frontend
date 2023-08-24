import { SHORT_MOVIE_DURATION } from "./constants";

export const changeTimeDuration = duration => `${Math.floor(duration / 60)}ч ${duration % 60}м`;

export const filterMoviesByTitle = (cards, query) => {
  const userQuery = query.toLowerCase().trim();
  
  return cards.filter(movie => {
    const movieNameRu = movie.nameRU.toLowerCase();
    const movieNameEn = movie.nameEN.toLowerCase();
    
    return movieNameRu.includes(userQuery) || movieNameEn.includes(userQuery);
  });
};

export const filterMoviesByDuration = (cards) => {
  return cards.filter((movie) => movie.duration < SHORT_MOVIE_DURATION);
};