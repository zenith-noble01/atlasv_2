import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { login } from "../Images";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

let linkStyle = {
  color: "#482691",
};
function Login() {
  const user = JSON.parse(localStorage.getItem("User"));
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  const { username, email } = userData;

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let route = "http://localhost:5000/api/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      const notherUser = {
        username,
        email,
      };

      await axios
        .post(route, notherUser)
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            localStorage.setItem("User", JSON.stringify(res.data));
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container className="account">
      <div className="main-box">
        <div className="box-1">
          <div className="box-image">
            <img src={login} alt="" />
          </div>
          <div className="box-text">
            <main>
              <h1>A</h1>
              <h4>tlas</h4>
              <p>
                Providing a set of tools to help students attain their maximum
                potential
              </p>
            </main>
          </div>
        </div>
        <div className="box-2">
          <div className="title">
            <h1>Login</h1>
            <p>An Academic transformation is just a few steps away</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={username}
              name="username"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={handleChange}
              value={email}
              name="email"
              type="password"
              placeholder="Password"
            />
            <label>Forgot Password</label>
            <div className="signup">
              <p>Don’t have an account? </p>
              <Link to="/register" style={linkStyle}>
                Sign up instead
              </Link>
              <button>Log in</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-box {
    display: flex;
    width: 60%;
    min-height: 80%;
    background: white;
    box-shadow: -9px -11px 141px -42px rgba(0, 0, 0, 0.45);
    border-radius: 15px;
    .box-1,
    .box-2 {
      width: 50%;
    }

    .box-1 {
      position: relative;
      .box-image {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        img {
          width: 100%;
          height: 100%;
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        }
      }
      .box-text {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 2;
        color: white;
        display: flex;
        justify-content: center;

        h1 {
          font-size: 10em;
          font-family: italiana;
        }
        h4 {
          position: absolute;
          top: 75%;
          left: 39%;
          font-size: 2em;
          letter-spacing: 0.4cm;
          text-align: center;
          font-family: italiana;
        }
        p {
          position: absolute;
          width: 90%;
          left: 5%;
          align-items: center;
        }
      }
    }
    .box-2 {
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1.5cm;
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
        label {
          color: #482691;
        }
      }
      .signup {
        margin-top: 0.5cm;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      button {
        padding: 0.15cm 1cm;
        margin-top: 0.5cm;
        font-size: 1em;
        background: black;
        color: white;
        border-radius: 20px;
        cursor: pointer;
        border: 1px solid transparent;
        &:hover {
          color: black;
          border-color: black;
          background: transparent;
        }
      }
    }
  }
`;
