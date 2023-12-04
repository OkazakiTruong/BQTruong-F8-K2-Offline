import React from "react";
import "./login.scss";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-main">
        <div className="header">Enter Email To Use Trello Ver 2</div>
        <form className="main">
          <input type="email" placeholder="Enter your email" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
