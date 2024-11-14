import React from 'react';
import './footer.scss';
import logo from '../assets/Logo.png';

function Footer() {
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
            <li><a href="/cart">Mon panier</a></li>
            <li><a href="/accoubt">Mon compte</a></li>
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
