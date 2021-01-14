import React from "react";

import "./Button.scss";

const Button = ({ name, className, styles }) => {
  return (
    <button className={`button-component ${className}`} style={styles}>
      {name}
    </button>
  );
};

export default Button;
