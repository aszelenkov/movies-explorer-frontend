import './AuthWithForm.css';
import Logo from '../Logo/Logo';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AuthWithForm(props) {

  const location = useLocation();

  const isSignInPage = location.pathname === '/signin';
  const isSignUpPage = location.pathname === '/signup';

  const footerPaddingClass = isSignInPage
    ? 'auth-with-form__footer-wrapper-signin'
    : isSignUpPage
    ? 'auth-with-form__footer-wrapper-signup'
    : '';

  return (
   <section className={`auth-with-form auth-with-form_large`}>
      <div className='auth-with-form__header-wrapper'>
        <Logo />
        <h1 className='auth-with-form__title'>{props.title}</h1>
        <form className='auth-with-form__form' id={props.formName}>
          {props.children}
        </form>
      </div>
      <div className={`auth-with-form__footer-wrapper ${footerPaddingClass}`}>
        <button
          className='auth-with-form__footer-submit-button button-hover'
          type='submit'
          form={props.formName}
        >
          {props.buttonText}
        </button>
        <p className='auth-with-form__footer-question'>
          {props.question}
          <Link
            className='auth-with-form__footer-link link-hover'
            to={`${props.link}`}
          >
            {props.linkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default AuthWithForm;
