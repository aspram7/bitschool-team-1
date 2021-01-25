import React, { useState } from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Checkbox from "../../../components/Checkbox/Checkbox";

import { validateEmail, validatePassword } from "../../../utils/validate";

import "./Login.scss";

const Login = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [checkbox, setCheckbox] = useState(false);
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onClickButton = () => {
    if (validateEmail(inputs.email) && validatePassword(inputs.password)) {
      setErrors({ email: "", password: "" });
      alert(`Email: ${inputs.email}\nPassword: ${inputs.password}`);
    } else {
      if (!validateEmail(inputs.email)) {
        setErrors({
          email: "Please enter a valid email address.",
          password: "",
        });
      } else if (!validatePassword(inputs.password)) {
        setErrors({
          email: "",
          password: "Your password must be at least 8 characters",
        });
      }
    }
  };

  const onChangeCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleForgotPassword = () => {
    let email = prompt("Please enter your email", "");
    if (!validateEmail(email) && email !== null) {
      handleForgotPassword();
    }
  };

  const onRedirect = () => {
    props.onRedirect("register");
  };

  return (
    <div className="login-reg-component">
      <h1>Login Form</h1>
      <div className="login-input-form">
        <Input
          labelName="Email"
          label="email-form"
          type="text"
          name="email"
          value={inputs.email}
          placeholder="Enter Your Email..."
          errorMessage={errors.email}
          onChange={onChange}
        />
      </div>
      <div className="login-input-form">
        <Input
          labelName="Password"
          label="password-form"
          type="password"
          name="password"
          value={inputs.password}
          placeholder="Enter Your Password..."
          errorMessage={errors.password}
          onChange={onChange}
        />
      </div>
      <div className="checkbox-and-link">
        <Checkbox checked={checkbox} onChange={onChangeCheckbox} />
        <div className="blue-link" onClick={handleForgotPassword}>
          Forgot Password?
        </div>
      </div>
      <Button onClick={onClickButton} className="login-button-form">
        LOGIN
      </Button>
      <div className="login-reg">
        Don't have an account?
        <span className="blue-link" onClick={onRedirect}>
          Register Now
        </span>
      </div>
    </div>
  );
};

export default Login;
