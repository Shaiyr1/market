import React from 'react';
import './Footer.scss';
import instagram from '../../assets/icon/footerIcon/instagram.png';
import whatsapp from '../../assets/icon/footerIcon/whatsapp.png';
import telegram from '../../assets/icon/footerIcon/telegram.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer' id='contacts'>
      <div className="container footer__container">
        <ul className='footer__ul'>
            <li><Link><img className='footer__ul-logo' src={instagram} alt="instagram" /></Link></li>
            <li><Link><img className='footer__ul-logo' src={whatsapp} alt="whatsapp" /></Link></li>
            <li><Link><img className='footer__ul-logo' src={telegram} alt="telegram" /></Link></li>
        </ul>
        {/* <h5>Создатель сайта: Муктаралиев Шайырбек</h5> */}
      </div>
    </footer>
  )
}

export default Footer
