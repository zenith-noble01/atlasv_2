import React, { useState } from "react";
import "../styles/auth.scss";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = userData;

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="app__auth login">
      <div className="auth__container">
        <div className="auth__left">
          <div className="left__header">
            <div className="logo">atlas.</div>
          </div>
        </div>
        <div className="auth__right">
          <div className="right__header">
            <p>Register</p>
          </div>
          <form onSubmit={handleSubmit} className="auth__form">
            <div className="input__container">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="input__container">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input__container">
              <input
                type=""
                placeholder="Create a password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
