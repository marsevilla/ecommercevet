import React from 'react';
import './Auth.scss';

const Login = () =>{
  return (
    <div className="auth-container">
      <header className="auth-header">
        <h1>Se connecter</h1>
      </header>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Entrez votre email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" placeholder="Entrez votre mot de passe"/>
        </div>
        <div className="form-footer">
          <a href="/forgot-password" className="forgot-password">Mot de passe oublié</a>
        </div>
        <button type="submit" className="auth-button">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
