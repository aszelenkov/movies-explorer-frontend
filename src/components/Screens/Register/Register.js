import AuthWithForm from '../../AuthWithForm/AuthWithForm';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';

function Register() {

  const {
    values, 
    handleChange, 
    errors, 
    isValid, 
    resetForm, 
    setValues, 
    setIsValid 
  } = useFormAndValidation();

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
      values={values}
    >
      <label 
        className='auth-with-form__label' 
        htmlFor='name-input'>
          Имя
      </label>
      <input 
        className='auth-with-form__input'
        type='name'
        name='name'
        id='name-input'
        required
        onChange={handleChange}
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
        required
        onChange={handleChange}
        minLength='2'
        maxLength='25'
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
        minLength='5'
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
