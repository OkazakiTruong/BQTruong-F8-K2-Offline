import React from "react";
import "./login.scss";

export default function Login() {
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
