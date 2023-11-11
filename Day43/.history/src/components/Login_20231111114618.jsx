import React, { useEffect, useState } from "react";
import { client } from "../config/client";

const getApiKey = async () => {
  const [userEmail,setUserEmail] = useState("");

  const apiKey = localStorage.getItem("apiKey");
  const email = localStorage.getItem("email");
  if (apiKey) {
    if (email) {
      client.setApiKey(apiKey);
    } else {
        const { response, data } = await client.get(
            `/api-key?email=${userEmail}`
          );
          if (response.ok) {
            client.setApiKey(data.data.apiKey);
            localStorage.setItem("apiKey",apiKey);
            localStorage.setItem("userEmail",userEmail);
          } else {
            alert("Có lỗi rồi, Vui lòng đăng nhập lại");
            localStorage.removeItem("apiKey");
            localStorage.removeItem("apiKey");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
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
