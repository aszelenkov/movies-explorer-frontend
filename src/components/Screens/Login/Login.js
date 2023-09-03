import AuthWithForm from '../../AuthWithForm/AuthWithForm';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { EMAIL_PATTERN } from '../../../utils/constants';

function Login({onLogin, isLoading}) {

  const {
    values, 
    handleChange, 
    errors, 
    isValid, 
  } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values.email, values.password);
  };

  return (
    <AuthWithForm
      formName='loginForm'
      title='Рады видеть!'
      buttonText='Войти'
      linkText='Регистрация'
      question='Ещё не зарегистрированы?'
      link='/signup'
      noValidate
      isValid={isValid}
      pageType='login'
      onSubmit={handleSubmit} 
      isLoading={isLoading}
    >
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
        minLength='2'
        maxLength='30'
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

export default Login;
