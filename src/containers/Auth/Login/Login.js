import React, { useState } from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { validateEmail, validatePassword } from "../../../utils/validate";

import "./Login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
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
        setErrors({ email: "Please enter a valid email address.", password: "" });
      } else if (!validatePassword(inputs.password)) {
        setErrors({ email: "", password: "Your password must be at least 8 characters" });
      }
    }
  };

  return (
    <div>
      <Input
        type="text"
        name="email"
        value={inputs.email}
        placeholder="Enter Your Email..."
        errorMessage={errors.email}
        onChange={onChange}
      />
      <Input
        type="password"
        name="password"
        value={inputs.password}
        placeholder="Enter Your Password..."
        errorMessage={errors.password}
        onChange={onChange}
      />
      <Button onClick={onClickButton}>Click me</Button>
    </div>
  );
};

export default Login;
