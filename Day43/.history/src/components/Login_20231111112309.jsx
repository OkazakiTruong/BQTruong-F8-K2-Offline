import React, { useEffect } from "react";
import { client } from "../config/client";

const getApiKey = async () => {
  const { response, data } = await client.get(
    `/api-key?email=buiquangtruong1105@gmail.com`
  );
  console.log(response);
  if (response.ok) {
    console.log(data);
  } else {
    console.log("Unauthentication");
  }
};
const getUserInfo = async () => {
  const { response, data } = await client.get("user/profile");
  if (response.ok) {
    console.log(data);
  } else {
    console.log("Unauthortication");
  }
};
export default function Login() {
  useEffect(() => {
    getApiKey();
  }, []);
  return (
    <div className="login">
      <form action="" className="login-form">
        <h2 className="form-heading">Đăng nhập ngay</h2>
      </form>
    </div>
  );
}
