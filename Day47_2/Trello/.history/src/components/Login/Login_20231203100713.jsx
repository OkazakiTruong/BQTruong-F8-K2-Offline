import React from "react";
import "./login.scss";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-main">
        <div className="header">Enter Email To Use Trello</div>
        <div className="main">
          <input type="email" placeholder="Enter your email" />
        </div>
      </div>
      {/* <div className="layout"></div> */}
    </div>
  );
}
