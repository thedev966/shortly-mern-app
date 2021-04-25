import React, { useRef, useState } from "react";
import "../css/Header.css";
import logo from "../assets/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { motion } from "framer-motion";
import Modal from "react-modal";
import Login from "./Login";
import { Route, Link } from "react-router-dom";
import Register from "./Register";
import { logOutUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import axios from "../axios";

const Header = ({ isLoggedIn }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const header_right = useRef();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutUser());
    axios
      .get("/api/auth/logout")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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

  const headerVariant = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.7,
      },
    },
  };

  const openAuthModal = () => {
    setIsModalOpened(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpened(false);
    document.body.style.overflow = "unset";
  };

  return (
    <motion.div
      className="header"
      variants={headerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="header__left">
        <Link to="/">
          <img className="header__leftLogo" src={logo} alt="logo" />
        </Link>
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

        {!isLoggedIn && (
          <Link className="button__container" to="/login">
            <button
              onClick={openAuthModal}
              className="header__rightButton loginBtn"
            >
              Login
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link className="button__container" to="/register">
            <button
              onClick={openAuthModal}
              className="header__rightButton signUpBtn"
            >
              Sign Up
            </button>
          </Link>
        )}

        <Link to="/account">
          {isLoggedIn && (
            <button className="header__rightButton loginBtn">Account</button>
          )}
        </Link>

        {isLoggedIn && (
          <button onClick={logOut} className="header__rightButton signUpBtn">
            Log Out
          </button>
        )}
      </div>
      <MenuIcon onClick={handleMenuIconClick} />

      {/* Popup Modal for auth */}

      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        className="auth_modal"
        overlayClassName="auth_overlay"
        ariaHideApp={false}
      >
        <Route exact path="/login">
          <Login closeModal={closeModal} />
        </Route>
        <Route exact path="/register">
          <Register closeModal={closeModal} />
        </Route>
      </Modal>
    </motion.div>
  );
};

export default Header;
