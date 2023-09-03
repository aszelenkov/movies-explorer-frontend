import { ERROR_MESSAGES } from './constants';
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    switch (res.status) {
      case 400:
        return Promise.reject(ERROR_MESSAGES.INPUT_ERROR);
      case 401:
        return Promise.reject(ERROR_MESSAGES.WRONG_CREDENTIALS);
      case 403:
        return Promise.reject(ERROR_MESSAGES.WRONG_CREDENTIALS);
      case 404:
        return Promise.reject(ERROR_MESSAGES.PAGE_NOT_FOUND);
      case 409:
        return Promise.reject(ERROR_MESSAGES.CONFLICT);
      case 500:
        return Promise.reject(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
      default:
        return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
};