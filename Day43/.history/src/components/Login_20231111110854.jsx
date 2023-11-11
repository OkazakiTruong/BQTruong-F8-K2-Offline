import React from "react";
import { client } from "../config/client";

const getApiKey = () => {
  const { response, data } = client.get(
    "/apiKey?email=buiquangtruong1105@gmail.com"
  );
};

export default function Login() {
  return (
    <div className="login">
      <form action="" className="login-form">
        <h2 className="form-heading">Đăng nhập ngay</h2>
      </form>
    </div>
  );
}
