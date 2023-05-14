import { logo } from "../assets";
import "../styles/header.scss";
import { headerRoutes } from "../constants";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="landing__header">
      <nav className="header__container">
        <div className="logo">
          <img src={logo} alt="atlas learning platform logo" />
          atlas
        </div>
        <ul className="header__routes">
          {headerRoutes.map((route, index) => (
            <li key={index}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
