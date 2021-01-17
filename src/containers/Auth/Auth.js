import React, { useState } from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

import "./Auth.scss";

const Auth = () => {
  const [activePage, setActivePage] = useState("register");

  const onRedirect = (page) => {
    setActivePage(page);
  };

  return <div className="auth">{activePage === "register" ? <Register onRedirect={onRedirect} /> : <Login onRedirect={onRedirect} />}</div>;
};

export default Auth;
