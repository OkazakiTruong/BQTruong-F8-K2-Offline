import React, { useEffect, useState } from "react";
import { client } from "../config/client";
import { useDispatch, useSelector } from "../core/hook";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const state = useSelector();
  const dispatch = useDispatch();
  const getApiKey = async () => {
    const { response, data } = await client.get(`/api-key?email=${userEmail}`);
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetApiKey = (e) => {
    e.preventDefault();
    getApiKey().then((res) => {
      if (res.code === 200) {
        client.setApiKey(res.data.apiKey);
        localStorage.setItem("email", userEmail);
        localStorage.setItem("apiKey", res.data.apiKey);
      } else {
        console.log("Có lỗi rồi vui lòng reload");
        localStorage.removeItem("email");
        localStorage.removeItem("apiKey");
      }
    });
  };
  const login = () => {
    const apiKey = localStorage.getItem("apiKey");
    const email = localStorage.getItem("email");
    if (apiKey) {
      if (email) {
        client.setApiKey(apiKey);
      }
    }
  };

  const handleChange = (e) => {
    setUserEmail(e.target.value);
  };
  useEffect(() => {
    login();
  }, []);
  return (
    <div className="login">
      <form action="" className="login-form" onSubmit={handleSetApiKey}>
        <h2 className="form-heading">Đăng nhập ngay</h2>
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <button className="btn">Đăng nhập</button>
      </form>
    </div>
  );
}
