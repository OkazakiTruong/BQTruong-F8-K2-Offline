import React, { useState } from "react";
import "./login.scss";
import { useDispatch } from "react-redux";
import { getApiKey } from "../../stores/slices/LoginSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch;

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getApiKey(email));
  };
  return (
    <div className="login-wrapper">
      <div className="login-main">
        <div className="header">Enter Email To Use Trello Ver 2</div>
        <form className="main" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleChangeEmail}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
