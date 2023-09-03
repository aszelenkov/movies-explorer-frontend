import { checkResponse } from '../utils/checkResponse';
import { MAIN_BASE_URL } from '../utils/constants';

export const register = (name, email, password) => {
  return fetch(`${MAIN_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then(checkResponse);
}

export const loginUser = (email, password) => {
  return fetch(`${MAIN_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }),
  })
  .then(checkResponse)
  .then((data) => {
    if (data.token){
      localStorage.setItem('token', data.token);
      return data;
    }
  });
};

export const checkToken = () => {
  const token = localStorage.getItem('token');
  if (token){
    return fetch(`${MAIN_BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
    .then(checkResponse);
  } else {
    return Promise.reject('Токен не найден');
  }
};