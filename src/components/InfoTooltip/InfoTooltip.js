
import React from 'react';
import './InfoTooltip.css';
import successImg from '../../images/success.svg';
import errorImg from '../../images/error.svg';
import { usePopupClose } from '../../hooks/usePopupClose';

function InfoTooltip({ 
  isOpen, 
  onClose, 
  isSuccess, 
  message 
}) {
  
  usePopupClose(isOpen, onClose);

  return (
    <div className={`info-tooltip ${isOpen && 'info-tooltip_opened'}`}>
      <div className='info-tooltip__container info-tooltip__type_info'>
        <button 
          className='info-tooltip__button-close info-tooltip__close' 
          type='button' 
          onClick={onClose} 
          aria-label='Закрыть pop-up'>
        </button>
        <img className='info-tooltip__status' 
          src={isSuccess ? successImg : errorImg} 
          alt={isSuccess ? 'Успешно' : 'Ошибка'} 
        />
        <h2 className='info-tooltip__title info-tooltip__text'>
          {message}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;