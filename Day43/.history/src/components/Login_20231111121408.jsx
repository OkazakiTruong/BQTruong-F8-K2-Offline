import React, { useEffect, useState } from "react";
import { client } from "../config/client";

export default function Login() {
  const [userEmail, setUserEmail] = useState("buiquangtruong1105@gmail.com");
  const getApiKey = async () => {
    const { response, data } = await client.get(`/api-key?email=${userEmail}`);
    try {
      return data.data.apiKey;
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
          console.log(res);
        });
      }
    } else {
      getApiKey();
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
