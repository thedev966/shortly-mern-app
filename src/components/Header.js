import React, { useRef } from "react";
import "../css/Header.css";
import logo from "../assets/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const header_right = useRef();

  const handleMenuIconClick = () => {
    const navbar = header_right.current.classList;

    if (navbar.contains("active")) {
      // close it
      navbar.remove("active");
    } else {
      // otherwise add it
      navbar.add("active");
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <img className="header__leftLogo" src={logo} alt="logo" />
      </div>
      <div ref={header_right} className="header__right">
        <ul className="header__rightNavigation">
          <li className="header__rightNavItem">
            <a href="#">Features</a>
          </li>
          <li className="header__rightNavItem">
            <a href="#">Pricing</a>
          </li>
          <li className="header__rightNavItem">
            <a href="#">Resources</a>
          </li>
        </ul>
        <button className="header__rightButton loginBtn">Login</button>
        <button className="header__rightButton signUpBtn">Sign Up</button>
      </div>
      <MenuIcon onClick={handleMenuIconClick} />
    </div>
  );
};

export default Header;
