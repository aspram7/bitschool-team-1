import React from "react";

import "./Button.scss";

const Button = ({ children, className }) => {
  return <button className={`button-component ${className}`}>{children}</button>;
};

export default Button;
