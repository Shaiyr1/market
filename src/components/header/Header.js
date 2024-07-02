import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/icon/headerIcon/logo.png';
import searchIcon from '../../assets/icon/headerIcon/search.png';
import market from '../../assets/icon/headerIcon/market.png';

function Header({ cartItems }) {

  return (
    <section className='header'>
      <div className="container">
        <nav className='header__nav'>
          <Link to='/'><img className='header__nav-logo' src={logo} alt="logo" /></Link>
          <ul className='header__ul'>
            <li className='header__ul-li'><Link className='header__ul-link' to="/">Главная</Link></li>
            <li className='header__ul-li'><a className='header__ul-link' href="#all-product">Все продукты</a></li>
            <li className='header__ul-li'><a className='header__ul-link' href="#contacts">Контакты</a>
            </li>
            <Link><img src={searchIcon} alt="search" /></Link>
            <Link to='/pannier'><img src={market} alt="market" /></Link>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Header




