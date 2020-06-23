import React from "react";
import "../App.css";

const Button = ({ title, handleClick }) => (
  <span onClick={handleClick} className="button">
    {title}
  </span>
);

export default Button;
