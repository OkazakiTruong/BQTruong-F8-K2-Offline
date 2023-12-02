import React from "react";
import "./login.scss";

export default function Login() {
  return (
    <div className="login-wrapper">
      <h1>Sử dụng email để có thể đăng nhập Chello nhé!</h1>
      <form>
        <input type="email" placeholder="Nhập vào email của bạn!!" />
      </form>
    </div>
  );
}
