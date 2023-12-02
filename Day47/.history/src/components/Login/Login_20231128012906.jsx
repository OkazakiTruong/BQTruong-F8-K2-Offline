import React, { useState } from "react";
import "./login.scss";
import { useDispatch } from "react-redux";

export default function Login() {
  const { email, setEmail } = useState;
  const dispath = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-wrapper">
      <h1>Sử dụng email để có thể đăng nhập Chello nhé!</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Nhập vào email của bạn!!" />
      </form>
    </div>
  );
}
