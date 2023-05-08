import React from "react";
import "../styles/header.scss";
import { headerCtas, headerRoutes } from "../constants";
import { Link } from "react-router-dom";
import { LoginRegisterButton } from "./";

const Header = () => {
  return (
    <div className="app__header">
      <div className="logo">
        <p>atlas.</p>
      </div>
      <div className="header__routes">
        <ul>
          {headerRoutes.map((route, index) => (
            <Link to={route.url} key={index}>
              <li>{route.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="header__cta">
        <LoginRegisterButton />
      </div>
    </div>
  );
};

export default Header;
