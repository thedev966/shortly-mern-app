import React from "react";
import "../css/Feature.css";

const FeatureItem = ({ icon, heading, text }) => {
  return (
    <div className="feature-item">
      <div className="feature-item__iconContainer">
        <img className="feature-item__icon" src={icon} alt="feature-icon" />
      </div>
      <h2 className="feature-item__heading">{heading}</h2>
      <p className="feature-item__text">{text}</p>
    </div>
  );
};

export default FeatureItem;
