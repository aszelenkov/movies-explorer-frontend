import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';
import './Logo.css'

function Logo() {
  return(
    <div className='logo'>
      <Link className='logo__link link-hover' to='/'>
        <img  className='logo__img' src={logoHeader} alt='Логотип'/>
      </Link>
    </div>
  )
}

export default Logo;