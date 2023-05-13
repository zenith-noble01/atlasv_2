import React from "react";
import "../styles/header.scss";
import { headerRoutes } from "../constants";
import { Link } from "react-router-dom";
import { LoginRegisterButton } from "./";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Header = () => {
  return (
    <div className="app__header">
      <div className="logo">
        <p>atlas.</p>
      </div>
      <div className="header__routes">
        <ul>
          {headerRoutes.map((route, index) => (
            <motion.li
              key={index}
              variants={fadeIn("down", "tween", index * 0.05, 0.5)}
              initial="hidden"
              animate="show"
            >
              <Link to={route.url}>{route.name}</Link>
            </motion.li>
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
