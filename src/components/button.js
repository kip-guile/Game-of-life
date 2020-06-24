import React from "react";
import "../App.css";

const Button = ({ title, handleClick, icon }) => (
  <span onClick={handleClick} className="button">
    <i className={icon}></i>
    {title}
  </span>
);

export default Button;
