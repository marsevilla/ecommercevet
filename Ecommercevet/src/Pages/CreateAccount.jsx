import React from 'react';
import './Auth.scss';

const CreateAccount = () =>{
  return (
    <div className="auth-container">
      <header className="auth-header">
        <h1>Créer un compte</h1>
      </header>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>
          <input type="text" id="name" placeholder="Entrez votre nom complet" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" placeholder="Entrez votre email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" placeholder="Créez un mot de passe" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirmez votre mot de passe"
          />
        </div>
        <div className="form-footer">
          <label className="terms">
            <input type="checkbox" /> J'accepte les conditions générales
          </label>
        </div>
        <button type="submit" className="auth-button">Créer un compte</button>
      </form>
    </div>
  );
};

export default CreateAccount;
