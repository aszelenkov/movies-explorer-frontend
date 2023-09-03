import React from 'react';
import AuthWithForm from '../../AuthWithForm/AuthWithForm';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { NAME_PATTERN, EMAIL_PATTERN } from '../../../utils/constants';

function Register({onRegister, isLoading}) {

  const {
    values, 
    handleChange, 
    errors, 
    isValid,  
  } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  return (
    <AuthWithForm
      formName='RegisterForm'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      linkText='Войти'
      question='Уже зарегистрированы?'
      link='/signin'
      noValidate
      isValid={isValid}
      onSubmit={handleSubmit} 
      pageType='register'
      isLoading={isLoading}
    >
      <label 
        className='auth-with-form__label' 
        htmlFor='name-input'>
          Имя
      </label>
      <input 
        className='auth-with-form__input'
        type='text'
        name='name'
        id='name-input'
        required
        value={values.name || ''}
        onChange={handleChange}
        pattern={NAME_PATTERN}
        minLength='2'
        maxLength='30'
      />
      <span 
        className='auth-with-form__input-error name-input-error'>
          {errors.name}
      </span>
      <label 
        className='auth-with-form__label' 
        htmlFor='email-input'>
          E-mail
      </label>
      <input 
        className='auth-with-form__input'
        type='email'
        name='email'
        id='email-input'
        value={values.email || ''}
        required
        onChange={handleChange}
        pattern={EMAIL_PATTERN}
      />
      <span 
        className='auth-with-form__input-error email-input-error'>
          {errors.email}
      </span>
      <label 
        className='auth-with-form__label' 
        htmlFor='password-input'>
          Пароль
      </label>
      <input 
        className='auth-with-form__input'
        type='password'
        name='password'
        id='password-input'
        value={values.password || ''}
        minLength='8'
        required
        onChange={handleChange}
      />
      <span 
        className='auth-with-form__input-error password-input-error'>
          {errors.password}
      </span>

    </AuthWithForm>
  );
}

export default Register;
