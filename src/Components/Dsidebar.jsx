import React from "react";
import "../Styles/dsidebar.scss";
import { sidebarRoutes } from "../Constants/dummy.js";
import { logout } from "../Images";
import { NavLink } from "react-router-dom";

const Dsidebar = () => {
  return (
    <div className="app__dsidebar">
      <div className="sidebar__text">atlas.</div>

      <div className="sidebar__routes">
        {sidebarRoutes.map((route, index) => (
          <NavLink to={route.path} key={index}>
            <img src={route.icon} alt="" />
          </NavLink>
        ))}
      </div>

      <div className="signOut">
        <img src={logout} alt="logout icon tic summit" draggable={false} />
      </div>
    </div>
  );
};

export default Dsidebar;
