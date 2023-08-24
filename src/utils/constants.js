export const MAIN_BASE_URL = "https://api.aszelenkov.nomoredomains.xyz";
export const MOVIES_BASE_URL = "https://api.nomoreparties.co";
export const MOVIES_API_IMG = "https://api.nomoreparties.co/beatfilm-movies";
export const EMAIL_PATTERN = "^([^ ]+@[^ ]+\\.[a-z]{2,8}|)$";
export const NAME_PATTERN = "^[A-Za-zА-Яа-яЁё\\s\\-]+$";
export const SHORT_MOVIE_DURATION = 40;
export const ERROR_MESSAGES = {
  WRONG_CREDENTIALS: "Вы ввели неправильный логин или пароль.",
  TOKEN_ISSUES: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  INPUT_ERROR: "Некорректно заполнено одно из полей",
  INVALID_TOKEN: "При авторизации произошла ошибка. Переданный токен некорректен.",
  CONFLICT: "Пользователь с таким email уже существует.",
  REGISTRATION_ISSUE: "При регистрации пользователя произошла ошибка.",
  PROFILE_UPDATE_ERROR: "При обновлении профиля произошла ошибка.",
  INTERNAL_SERVER_ERROR: "500 На сервере произошла ошибка.",
  PAGE_NOT_FOUND: "Страница по указанному маршруту не найдена.",
  CONNECTION_REFUSED: "Не удается установить соединение с сервером.",
  DEFAULT: "Неизвестная ошибка",
};
export const FEEDBACK_MSG = {
  OPERATION_SUCCESS: "Все прошло успешно",
  OPERATION_FAILURE: "Что-то пошло не так",
  PROFILE_UPDATED: "Данные профиля обновлены!",
  REGISTRATION_SUCCESS: "Вы успешно зарегистрированы!",
};
export const SEARCH_MSG = {
  SEARCH_NOT_FOUND: "Ничего не найдено",
  SEARCH_KEY_WORD: "Нужно ввести ключевое слово",
  SEARCH_SERVER_ERROR:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
};
export const RESOLUTIONS = {
  DESKTOP: 1200,
  TABLET: 767,
  MOBILE: 767,
};
export const INIT_CARDS = {
  DESKTOP: 12,
  TABLET: 8,
  MOBILE: 5,
};
export const MORE_CARDS = {
  DESKTOP: 3,
  TABLET: 2,
  MOBILE: 2,
};
//лок хранилище
export const KEYS = {
  TOKEN: "token",
  MOVIES: "movies",
  MOVIE_SEARCH: "movieSearch",
  SHORT_MOVIES: "shortMovies",
  ALL_MOVIES: "allMovies"
};