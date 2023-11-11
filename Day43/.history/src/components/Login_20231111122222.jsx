import React, { useEffect, useState } from "react";
import { client } from "../config/client";

export default function Login() {
  const [userEmail, setUserEmail] = useState("buiquangtruong1105@gmail.com");
  const getApiKey = async () => {
    const { response, data } = await client.get(`/api-key?email=${userEmail}`);
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const login = () => {
    const apiKey = localStorage.getItem("apiKey");
    const email = localStorage.getItem("email");
    if (apiKey) {
      if (email) {
        console.log("Chào mừng quay trở lại");
      } else {
        getApiKey().then((res) => {
          if (res.code === 200) {
            client.setApiKey(res.data.apiKey);
            localStorage.setItem("email", userEmail);
            localStorage.setItem("apiKey", apiKey);
          } else {
            console.log("Có lỗi rồi vui lòng reload");
            localStorage.removeItem("email");
            localStorage.removeItem("apiKey");
          }
        });
      }
    } else {
      getApiKey().then((res) => {
        if (res.code === 200) {
          client.setApiKey(res.data.apiKey);
          localStorage.setItem("email", userEmail);
          localStorage.setItem("apiKey", apiKey);
        } else {
          console.log("Có lỗi rồi vui lòng reload");
          localStorage.removeItem("email");
          localStorage.removeItem("apiKey");
        }
      });
    }
  };
  useEffect(() => {
    login();
  }, []);
  return (
    <div className="login">
      <form action="" className="login-form">
        <h2 className="form-heading">Đăng nhập ngay</h2>
      </form>
    </div>
  );
}
