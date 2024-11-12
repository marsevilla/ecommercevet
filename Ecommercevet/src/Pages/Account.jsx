import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../Styles/main.scss';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const [loginDetails, setLoginDetails] = useState({
    name: "",
    password: "",
  });

  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    const storedUserInfo = localStorage.getItem("userInfo");

    if (storedLoginState === "true" && storedUserInfo) {
      setIsLoggedIn(true);
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    if (loginDetails.email && loginDetails.password) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: loginDetails.email,
          password: loginDetails.password,
        });

        const { user } = response.data;

        setUserInfo(user);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userInfo", JSON.stringify(user));

        alert("Connexion réussie!");
      } catch (err) {
        alert("Erreur de connexion, veuillez vérifier vos informations.");
      }
    } else {
      alert("Veuillez entrer des informations valides.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      registerDetails.name &&
      registerDetails.email &&
      registerDetails.password
    ) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          name: registerDetails.name,
          email: registerDetails.email,
          password: registerDetails.password,
        });

        const { user } = response.data;

        setUserInfo(user);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userInfo", JSON.stringify(user));

        alert("Votre compte a bien été créé!");
      } catch (err) {
        alert("Erreur lors de l'inscription, veuillez vérifier vos informations.");
      }
    } else {
      alert("Tous les champs sont requis!");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUserInfo({
      name: "",
      email: "",
    });
    setLoginDetails({
      email: "",
      password: "",
    });
    setRegisterDetails({
      name: "",
      email: "",
      password: "",
    });

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsEditing(false);

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/user?_method=PUT', 
        {
          name: userInfo.name,
          email: userInfo.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      const { user } = response.data;
  
      setUserInfo(user);
      localStorage.setItem("userInfo", JSON.stringify(user));
  
      alert("Profil mis à jour avec succès !");
    } catch (err) {
      alert("Erreur lors de la mise à jour du profil.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="account-container">
        {isRegistering ? (
          <>
            <h1 className="text-3xl">Créer un compte</h1>
            <form onSubmit={handleRegister}>
              <label htmlFor="register-username">Nom d'utilisateur:</label>
              <input
                type="text"
                id="register-username"
                name="name"
                value={registerDetails.name}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="register-email">E-mail:</label>
              <input
                type="email"
                id="register-email"
                name="email"
                value={registerDetails.email}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="register-password">Mot de passe:</label>
              <input
                type="password"
                id="register-password"
                name="password"
                value={registerDetails.password}
                onChange={handleRegisterChange}
                required
              />
              <button type="submit" className="btn register mb-5">
                Créer mon compte
              </button>
              <button
                type="button"
                className="btn switch"
                onClick={() => setIsRegistering(false)}
              >
                Connexion
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-3xl">Connexion</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginDetails.email}
                onChange={handleLoginChange}
                required
              />
              <label htmlFor="password">Mot de passe:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginDetails.password}
                onChange={handleLoginChange}
                required
              />
              <button type="submit" className="btn login mb-5">
                Connexion
              </button>
              <button
                type="button"
                className="btn switch"
                onClick={() => setIsRegistering(true)}
              >
                Créer un compte
              </button>
            </form>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="account-container">
      <h1 className="text-3xl">Mon compte</h1>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Nom d'utilisateur:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn save mb-5">
              Enregistrer les modifications
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={() => setIsEditing(false)}
            >
              Annuler
            </button>
          </div>
        </form>
      ) : (
        <div className="personal-info">
          <div className="info-item">
            <strong>Nom d'utilisateur:</strong> {userInfo.name}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {userInfo.email}
          </div>
          <div className="button-group">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="btn edit mb-5"
            >
              Modifier les informations
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="btn logout"
            >
              Déconnexion
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;