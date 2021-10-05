import React, { useState, useRef } from "react";
import "./Login.scss";
import logo from "../../images/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Flixit? <b>Sign up now</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
