import React from "react";

import "./Input.scss";

const Input = (props) => {
  return (
    <div className="input-box">
      <input type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
      <p>{props.errorMessage}</p>
    </div>
  );
};

export default Input;
