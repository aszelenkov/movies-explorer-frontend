import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import * as MainApi from "../../utils/MainApi";
import { 
  FEEDBACK_MSG, 
  ERROR_MESSAGES, 
  NAME_PATTERN, 
  EMAIL_PATTERN } from "../../utils/constants";

function Profile({ onSignOut, handleConfirmStatus }) {
  const { currentUser, updateUser } = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [originalProfileName, setOriginalProfileName] = useState("");
  const [originalProfileEmail, setOriginalProfileEmail] = useState("");

  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormAndValidation();

  useEffect(() => {
    if (currentUser && currentUser.name && currentUser.email) {
      setOriginalProfileName(currentUser.name);
      setOriginalProfileEmail(currentUser.email);
      setValues({
        profileName: currentUser.name,
        profileEmail: currentUser.email,
      });
      setProfileName(currentUser.name);
      setProfileEmail(currentUser.email);
    }
  }, [currentUser, setValues]);

  useEffect(() => {
    const isProfileNameChanged = values.profileName !== originalProfileName;
    const isProfileEmailChanged = values.profileEmail !== originalProfileEmail;
    setIsValid((isProfileNameChanged || isProfileEmailChanged) && isValid);
  }, [
    values.profileName,
    values.profileEmail,
    originalProfileName,
    originalProfileEmail,
    isValid,
    setIsValid,
  ]);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const updateUserInfo = (values) => {
    setIsServerError(false);
    setIsLoading(true);
    return MainApi.setUserInfo({
      name: values.profileName,
      email: values.profileEmail,
    })
      .then(({ name, email }) => {
        setOriginalProfileName(name);
        setOriginalProfileEmail(email);
        setProfileName(name);
        setProfileEmail(email);
        updateUser(name, email);
        setIsEditing(false);
        handleConfirmStatus(true, FEEDBACK_MSG.PROFILE_UPDATED);
      })
      .catch((err) => {
        setIsServerError(true);
        console.error(`Ошибка: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSaveButtonClick = (e) => {
    e.preventDefault();
    updateUserInfo(values);
  };

  return (
    <main>
      <section className="profile" aria-label="Профиль">
        <div className="profile__wrapper">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>

          <form
            className="profile__form"
            name="profile-form"
            noValidate
            onSubmit={handleSaveButtonClick}
          >
            <label className="profile__form-label">
              <span className="profile__form-input-title input-focus">Имя</span>
              <input
                className="profile__form-input"
                type="text"
                value={values.profileName || ""}
                name="profileName"
                id="input-profile-name"
                placeholder="Имя"
                required
                minLength="3"
                maxLength="40"
                pattern={NAME_PATTERN}
                readOnly={!isEditing}
                onChange={handleChange}
              />
            </label>
            <span className="profile__form-input-error">
              {errors.profileName}
            </span>
            <label className="profile__form-label">
              <span className="profile__form-input-title">E-mail</span>
              <input
                className="profile__form-input"
                type="email"
                value={values.profileEmail || ""}
                name="profileEmail"
                id="input-profile-email"
                placeholder="E-mail"
                required
                pattern={EMAIL_PATTERN}
                readOnly={!isEditing}
                onChange={handleChange}
              />
            </label>
            <span className="profile__form-input-error">
              {errors.profileEmail}
            </span>
          </form>

          <div className="profile__button-wrapper">
            <p className="profile__server-error">
              {isServerError && ERROR_MESSAGES.PROFILE_UPDATE_ERROR}
            </p>
            {isEditing ? (
              <button
                className={`profile__button-save ${
                  !isValid || isLoading ? "profile__button-save_disabled" : ""
                }`}
                type="submit"
                disabled={!isValid}
                onClick={handleSaveButtonClick}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className="profile__button-edit button-hover"
                  type="button"
                  onClick={handleEditButtonClick}
                >
                  Редактировать
                </button>
                <button
                  className="profile__button-exit button-hover"
                  type="button"
                  onClick={onSignOut}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;