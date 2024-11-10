import React from 'react'
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="Logo.webp" alt="Coeur de soie" />
        <span className="brand-name">Coeur de soie</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/boutique">Boutique</a></li>
          <li><a href="/contact"></a>Contact</li>
        </ul>
      </nav>
      <div className="header-icons">
        <a href="/account" className="icon"><i className="fa fa-user"></i></a>
        <a href="/cart"><i className="fa fa-shopping-cart"></i></a>
      </div>
    </header>
  );
}
export default Header;
