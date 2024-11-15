import React from 'react';
import './footer.scss';
import { useEffect, useState } from 'react';
import logo from '../assets/Logo.png';

function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setIsLoggedIn(loggedIn);
    setUserRole(userInfo ? userInfo.role : null);
  }, []);

  return (
    <footer className="footer1">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Coeur de soie" />
          <div className="brand-text">
            <span className="brand-name">Coeur de soie</span>
            <p>400 University Drive Suite<br />200 Coral Gables,<br />FL 33134 USA</p>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/boutique">Boutique</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <ul>
            {isLoggedIn && <li><a href="/cart">Mon panier</a></li>}
            {isLoggedIn ? <li><a href="/account">Mon compte</a></li> : <li><a href="/account">Connexion</a></li>}
            {userRole === 'admin' && <li><a href="/admin">Tableau de bord</a></li>}
          </ul>
          <ul>
            <li><a href="/legals">Mentions légales</a></li>
            <li><a href="/terms">Conditions générales de ventes</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
      <p>2023 Coeur de soie. All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
