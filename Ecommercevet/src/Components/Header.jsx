import React from 'react'
import './header.scss';
import logo from '../assets/Logo.png';

function Header() {
  return (
    <header className="header">
      <a className="logo" href='/'>
        <img src={logo} alt="Coeur de soie" />
        <span className="brand-name">Coeur de soie</span>
      </a>
      <nav className="nav">
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/boutique">Boutique</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <a href="/account" className="icon"><i className="fa fa-user"></i></a>
        <a href="/Panier" className="icon"><i className="fa fa-shopping-cart"></i></a>
      </div>
    </header>
  );
}
export default Header;
