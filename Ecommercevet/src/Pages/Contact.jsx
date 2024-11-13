import React from "react";
import "../Styles/page/ContactPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faCheckCircle, faBox } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <header className="cgv-banner">
      </header>
      <div className="cgv-container">
        <h1 className="contact-title">Contactez-nous</h1>
        <p className="contact-subtitle">
        Pour plus d'informations sur nos produits et services, n'hésitez pas à nous envoyer un courriel. Notre personnel est toujours là pour vous aider. N'hésitez pas !
        </p>
      </div>

      <section className="contact-info">
        <div className="contact-item">
          <i className="icon-location"></i>
          <h3>Adresse</h3>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className="contact-item">
          <i className="icon-mail"></i>
          <h3>Mail</h3>
          <p>contact@coeurdesoie.com</p>
        </div>
        <div className="contact-item">
          <i className="icon-phone"></i>
          <h3>Téléphone</h3>
          <p>Mobile : (+84) 546-6789</p>
          <p>Hotline : (+84) 456-6789</p>
        </div>
        <div className="contact-item">
          <i className="icon-clock"></i>
          <h3>Horaires :</h3>
          <p>Lundi-Vendredi : 9:00 - 22:00</p>
          <p>Samedi-Sunday : 9:00 - 21:00</p>
        </div>
      </section>


      <section className="features-section">
        <div className="feature-item">
          <FontAwesomeIcon icon={faTrophy} className="icon" />
          <h3>Haute qualité</h3>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          <h3>Echange possible</h3>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faBox} className="icon" />
          <h3>Livraison soignée</h3>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
