import React, { useEffect } from "react";
import { client } from "../config/client";

const getApiKey = async () => {
  const apiKey = localStorage.getItem("apiKey");
  const email = localStorage.getItem("email");
  if (apiKey) {
    if (email) {
      client.setApiKey(apiKey);
    } else {
      alert("Có lỗi rồi, Vui lòng đăng nhập lại");
      localStorage.removeItem("apiKey");
      localStorage.removeItem("apiKey");
    }
  } else {
    alert("Có lỗi rồi, Vui lòng đăng nhập lại");
    localStorage.removeItem("apiKey");
    localStorage.removeItem("apiKey");
  }
  const { response, data } = await client.get(
    `/api-key?email=buiquangtruong1105@gmail.com`
  );
  if (response.ok) {
    console.log(data);
    client.setApiKey(data.data.apiKey);
  } else {
    console.log("Unauthentication");
  }
};
const getUserInfo = async () => {
  const { response, data } = await client.get("/users/profile");
  if (response.ok) {
    return data;
  } else {
    return null;
  }
};
export default function Login() {
  useEffect(() => {
    getApiKey().then((res) => getUserInfo());
  }, []);
  return (
    <div className="login">
      <form action="" className="login-form">
        <h2 className="form-heading">Đăng nhập ngay</h2>
      </form>
    </div>
  );
}
