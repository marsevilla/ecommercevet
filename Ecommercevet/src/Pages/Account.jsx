import React, { useState, useEffect } from "react";
import '../Styles/main.scss';


const Account = () => {
  // State for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially not logged in
  const [isEditing, setIsEditing] = useState(false); // To toggle edit mode

  // State for user information
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  // State for login credentials
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  // Load login state from localStorage on mount
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    const storedUserInfo = localStorage.getItem("userInfo");

    if (storedLoginState === "true" && storedUserInfo) {
      setIsLoggedIn(true);
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  // Handle login form input change
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Add validation or backend API logic here
    if (loginDetails.username && loginDetails.password) {
      const mockUserInfo = {
        username: loginDetails.username,
        email: "johndoe@example.com", // Mock email
        address: "123 Main Street, New York, NY 10001", // Mock address
        phone: "123-456-7890", // Mock phone
      };

      setUserInfo(mockUserInfo);
      setIsLoggedIn(true);

      // Save login state to localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userInfo", JSON.stringify(mockUserInfo));
    } else {
      alert("Please enter valid credentials!");
    }
  };

  // Handle logout
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false); // Reset login status
    setUserInfo({
      username: "",
      email: "",
      address: "",
      phone: "",
    }); // Clear user info
    setLoginDetails({
      username: "",
      password: "",
    }); // Clear login details

    // Remove login state from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
  };

  // Handle user info changes during edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Handle save changes
  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);

    // Update user info in localStorage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  // Render login form if not logged in
  if (!isLoggedIn) {
    return (
      <div className="account-container">
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
        </form>
      </div>
    );
  }

  // Render personal info if logged in
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
              onClick={handleLogout} // Logs out only on button click
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
