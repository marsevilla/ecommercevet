import React from 'react'
import './header.scss';
import { useEffect, useState } from 'react';
import logo from '../assets/Logo.png';

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setIsLoggedIn(loggedIn);
    setUserRole(userInfo ? userInfo.role : null);
  }, []);

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
          {userRole === 'admin' && <li><a href="/admin">Tableau de bord</a></li>}
        </ul>
      </nav>
      <div className="header-icons">
        <a href="/account" className="icon"><i className="fa fa-user"></i></a>
        {isLoggedIn && <a href="/Panier" className="icon"><i className="fa fa-shopping-cart"></i></a>}
      </div>
    </header>
  );
}
export default Header;
