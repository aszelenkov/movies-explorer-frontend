import { MOVIES_BASE_URL } from "../utils/constants";
import { checkResponse } from "../utils/checkResponse";
import { MAIN_BASE_URL } from '../utils/constants';

export const getSavedMovies = () => {
  const token = localStorage.getItem('token');
  return fetch(`${MAIN_BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const createSavedMovie = (movie) => {
  const token = localStorage.getItem('token');
  return fetch(`${MAIN_BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_BASE_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: MOVIES_BASE_URL + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteSavedMovie = (movieId) => {
  const token = localStorage.getItem('token');
  return fetch(`${MAIN_BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const getUserInfo = () => {
  const token = localStorage.getItem('token');
  return fetch(`${MAIN_BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const setUserInfo = ({ name, email }) => {
  const token = localStorage.getItem('token');
  return fetch(`${MAIN_BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: name, email: email }),
  }).then((res) => checkResponse(res));
};
