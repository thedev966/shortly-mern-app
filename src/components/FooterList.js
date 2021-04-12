import React from "react";
import "../css/FooterList.css";

const FooterList = ({ heading, links }) => {
  return (
    <div className="footer-list">
      <h3 className="footer-list__itemHeading">{heading}</h3>
      <ul className="footer-list__itemList">
        {links.map((link, key) => (
          <li key={key} className="footer__listItem">
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
