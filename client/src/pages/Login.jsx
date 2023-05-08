import React, { useState } from "react";
import "../styles/auth.scss";
import { BiPlus } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isvissible, setIsVissible] = useState(false);

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
        <div className="auth__header">
          <h1>Welcome back</h1>
          <p>Join Cameroon Largest Learning community.</p>
        </div>
        {/*    <div className="recent__container">
          <div className="recent__header">
            <p>Recent Logins</p>
          </div>
          <div className="add__container">
            <div className="nouser">
              <div className="plus_circle">
                <BiPlus />
              </div>
              <p>Add account</p>
            </div>
          </div>
        </div>
        <div className="or__container">
          <p>or</p>
        </div> */}
        <div className="login__form">
          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input__container">
                <input
                  type="text"
                  placeholder="Phone number, username or email"
                />
              </div>
              <div className="input__container">
                <input
                  type={isvissible ? "text" : "password"}
                  placeholder="Password"
                />
                {isvissible ? (
                  <BsEyeFill onClick={() => setIsVissible(!isvissible)} />
                ) : (
                  <BsEyeSlashFill onClick={() => setIsVissible(!isvissible)} />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
