import React from "react";
import "../css/Alert.css";

const Alert = ({ isSuccess, alertMessage }) => {
  return (
    <div
      className="alert"
      style={
        isSuccess
          ? { backgroundColor: "#22bb33" }
          : { backgroundColor: "#bb2124" }
      }
    >
      {alertMessage}
    </div>
  );
};

export default Alert;
