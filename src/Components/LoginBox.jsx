import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

let linkStyle = {
  textDecoration: "none",
};

function LoginBox() {
  const [newUser, setNewUser] = useState(null);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const { username, email, password, confirmPass } = user;

  const handleOnChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let route = "https://atlasv2.onrender.com/api/auth/register";

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) return;

    const userData = {
      username,
      email,
      password,
    };

    await axios
      .post(route, userData)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          localStorage.setItem("User", JSON.stringify(res.data));
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    setNewUser(JSON.parse(localStorage.getItem("User")));

    if (newUser) {
      navigate("/");
    }
  }, [navigate, newUser]);

  return (
    <Container>
      <div className="title">
        <h1>Create an Account</h1>
        <p>An Academic transformation is just a few steps away</p>
      </div>
      <form onSubmit={handleRegister}>
        <input
          onChange={handleOnChange}
          value={username}
          name="username"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={handleOnChange}
          value={email}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleOnChange}
          value={password}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={handleOnChange}
          value={confirmPass}
          name="confirmPass"
          type="password"
          placeholder="Confirm Password"
        />
        <p>
          Sign up as an{" "}
          <Link style={linkStyle} to="/">
            instructor
          </Link>{" "}
          instead
        </p>
        <button>Sign up</button>
      </form>
    </Container>
  );
}

export default LoginBox;

const Container = styled.div`
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1cm;
    p {
      width: 70%;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1cm;
    input {
      width: 70%;
      height: 39px;
      border: none;
      margin: 0.25cm 0;
      border-bottom: 2px solid #ffd600;
      outline: none;
      padding-left: 0.5cm;
    }
  }

  button {
    background: var(--secondary-color);
    height: 40px;
    border: none;
    outline-color: transparent;
    padding: 0 2.5rem;
    color: var(--primary-color);
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
  }
`;
