import React, { useEffect, useState } from "react";
import { client } from "../config/client";

export default function Login() {
  const getApiKey = async () => {
    const { response, data } = await client.get(`/api-key?email=${userEmail}`);
    if (response.ok) {
      client.setApiKey(data.data.apiKey);
      localStorage.setItem("apiKey", data.data.apiKey);
      localStorage.setItem("email", userEmail);
    } else {
      alert("Có lỗi rồi, Vui lòng đăng nhập lại");
      localStorage.removeItem("apiKey");
      localStorage.removeItem("email");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  const handleLogin = async () => {
    const [userEmail, setUserEmail] = useState("");

    const apiKey = localStorage.getItem("apiKey");
    const email = localStorage.getItem("email");
    if (apiKey) {
      if (email) {
        client.setApiKey(apiKey);
      } else {
      }
    } else {
      alert("Có lỗi rồi, Vui lòng đăng nhập lại");
      localStorage.removeItem("apiKey");
      localStorage.removeItem("apiKey");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    const getUserInfo = async () => {
      const { response, data } = await client.get("/users/profile");
      if (response.ok) {
        return data;
      } else {
        return null;
      }
    };
    useEffect(() => {}, []);
    return (
      <div className="login">
        <form action="" className="login-form">
          <h2 className="form-heading">Đăng nhập ngay</h2>
        </form>
      </div>
    );
  };
}
