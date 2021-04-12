import React from "react";
import logo from "../assets/logo.svg";
import FooterList from "./FooterList";
import footer_list from "../footer_list";
import "../css/Footer.css";
import fbIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <div className="footer__itemLogo">
            <img src={logo} alt="logo-icon" />
          </div>
          {footer_list.map((item, key) => (
            <FooterList key={key} heading={item.heading} links={item.links} />
          ))}
          <div className="footer__itemSocial">
            <img src={fbIcon} alt="fb-icon" />
            <img src={twitterIcon} alt="twitter-icon" />
            <img src={pinterestIcon} alt="pinterest-icon" />
            <img src={instagramIcon} alt="instagram-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
