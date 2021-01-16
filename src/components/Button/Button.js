import React from "react";

import "./Button.scss";

const Button = ({ name, className }) => {
  return <button className={`button-component ${className}`}>{name}</button>;
};

export default Button;
