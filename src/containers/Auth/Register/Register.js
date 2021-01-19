import React, { useState } from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

import { validateEmail, validatePassword } from "../../../utils/validate";

import "./Register.scss";

const Register = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onClickButton = () => {
    const obj = { name: "", email: "", password: "", confirmPassword: "" };
    if (
      inputs.name &&
      validateEmail(inputs.email) &&
      validatePassword(inputs.password) &&
      inputs.password === inputs.confirmPassword
    ) {
      setErrors(obj);
      alert(
        `Name: ${inputs.name}\nEmail: ${inputs.email}\nPassword: ${inputs.password}`
      );
    } else {
      switch (false) {
        case !!inputs.name:
          setErrors({ ...obj, name: "Name can't be empty" });
          break;
        case validateEmail(inputs.email):
          setErrors({ ...obj, email: "Please enter a valid email address." });
          break;
        case validatePassword(inputs.password):
          setErrors({
            ...obj,
            password: "Your password must be at least 8 characters",
          });
          break;
        case inputs.password === inputs.confirmPassword:
          setErrors({ ...obj, confirmPassword: "Passwords don't match" });
          break;
        default:
          setErrors(obj);
      }
    }
  };

  const onRedirect = () => {
    props.onRedirect("login");
  };

  return (
    <div className="login-reg-component">
      <h1>Register Form</h1>
      <div className="register-input-form">
        <Input
          labelName="Full Name"
          label="name-form"
          type="text"
          name="name"
          value={inputs.name}
          placeholder="Enter Your Name..."
          onChange={onChange}
        />
      </div>
      <div className="register-input-form">
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
      <div className="register-input-form">
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
      <div className="register-input-form">
        <Input
          labelName="Confirm Password"
          label="confirm-password-form"
          type="password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          placeholder="Confirm Your Password..."
          errorMessage={errors.confirmPassword}
          onChange={onChange}
        />
      </div>
      <Button onClick={onClickButton} className="register-button-form">
        REGISTER
      </Button>
      <div className="login-reg">
        Already have an account?
        <span className="blue-link" onClick={onRedirect}>
          Login Now
        </span>
      </div>
    </div>
  );
};

export default Register;
