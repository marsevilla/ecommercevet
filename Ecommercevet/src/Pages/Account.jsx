import React, { useState, useEffect } from "react";
import '../Styles/main.scss';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [registerDetails, setRegisterDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginDetails.username && loginDetails.password) {
      const mockUserInfo = {
        username: loginDetails.username,
        email: "johndoe@example.com",
        address: "123 Main Street, New York, NY 10001",
        phone: "123-456-7890",
      };

      setUserInfo(mockUserInfo);
      setIsLoggedIn(true);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userInfo", JSON.stringify(mockUserInfo));
    } else {
      alert("Please enter valid credentials!");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      registerDetails.username &&
      registerDetails.email &&
      registerDetails.password === registerDetails.confirmPassword
    ) {
      alert("Registration successful!");

      const mockUserInfo = {
        username: registerDetails.username,
        email: registerDetails.email,
        address: "",
        phone: "",
      };

      setUserInfo(mockUserInfo);
      setIsLoggedIn(true);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userInfo", JSON.stringify(mockUserInfo));
    } else {
      alert("Passwords do not match or missing fields!");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUserInfo({
      username: "",
      email: "",
      address: "",
      phone: "",
    });
    setLoginDetails({
      username: "",
      password: "",
    });
    setRegisterDetails({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  if (!isLoggedIn) {
    return (
      <div className="account-container">
        {isRegistering ? (
          <>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
              <label htmlFor="register-username">Username:</label>
              <input
                type="text"
                id="register-username"
                name="username"
                value={registerDetails.username}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="register-email">Email:</label>
              <input
                type="email"
                id="register-email"
                name="email"
                value={registerDetails.email}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="register-password">Password:</label>
              <input
                type="password"
                id="register-password"
                name="password"
                value={registerDetails.password}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="register-confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="register-confirm-password"
                name="confirmPassword"
                value={registerDetails.confirmPassword}
                onChange={handleRegisterChange}
                required
              />
              <button type="submit" className="btn register">
                Register
              </button>
              <button
                type="button"
                className="btn switch"
                onClick={() => setIsRegistering(false)}
              >
                Back to Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginDetails.username}
                onChange={handleLoginChange}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginDetails.password}
                onChange={handleLoginChange}
                required
              />
              <button type="submit" className="btn login">
                Log In
              </button>
              <button
                type="button"
                className="btn switch"
                onClick={() => setIsRegistering(true)}
              >
                Register
              </button>
            </form>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="account-container">
      <h1>My Account</h1>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={userInfo.username}
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
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn save">
              Save Changes
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="personal-info">
          <div className="info-item">
            <strong>Username:</strong> {userInfo.username}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {userInfo.email}
          </div>
          <div className="info-item">
            <strong>Address:</strong> {userInfo.address}
          </div>
          <div className="info-item">
            <strong>Phone:</strong> {userInfo.phone}
          </div>
          <div className="button-group">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="btn edit"
            >
              Edit Info
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="btn logout"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;