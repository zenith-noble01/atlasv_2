import React, { useState } from "react";
import "../styles/auth.scss";
import { BiPlus } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { facebook, google, twitter } from "../assets";
import { LoadImg } from "../components";

const Login = () => {
  const [userData, setUserData] = useState({
    data: "",
    password: "",
  });

  const [isvissible, setIsVissible] = useState(false);

  const { data, password } = userData;

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
        <div className="auth__header">
          <h1>Welcome back</h1>
          <p>Join Cameroon Largest Learning community.</p>
        </div>
        <div className="login__form">
          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input__container">
                <input
                  type="text"
                  placeholder="Phone number, username or email"
                  name="data"
                  onChange={handleChange}
                  value={data}
                />
              </div>
              <div className="input__container">
                <input
                  type={isvissible ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
                {isvissible ? (
                  <BsEyeFill onClick={() => setIsVissible(!isvissible)} />
                ) : (
                  <BsEyeSlashFill onClick={() => setIsVissible(!isvissible)} />
                )}
              </div>
            </div>
            <div className="actions">
              <label htmlFor="checkbox">
                <input type="checkbox" name="remember" id="checkbox" />
                Remember me
              </label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            <div className="cta">
              <button>Login</button>
              <Link to="/register">Create New Account.</Link>
            </div>
          </form>
          <div className="or__container">
            <p>Or continue with</p>
          </div>

          <div className="continue__container">
            <div className="company google">
              <LoadImg
                src={google}
                className="googleIcon"
                height={30}
                width={30}
              />
            </div>
            <div className="company facebook">
              <LoadImg
                src={facebook}
                className="facebookIcon"
                // height={50}
                width={70}
              />
            </div>
            <div className="company twitter">
              <LoadImg
                src={twitter}
                className="twitterIcon"
                height={30}
                width={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
