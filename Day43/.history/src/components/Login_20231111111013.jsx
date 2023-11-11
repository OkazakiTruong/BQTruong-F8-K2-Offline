import React, { useEffect } from "react";
import { client } from "../config/client";

const getApiKey = async () => {
  const { response, data } = await client.get(
    "/apiKey?email=buiquangtruong1105@gmail.com"
  );
  if (response.ok) {
    console.log(data);
  } else {
    console.log("Unauthentication");
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
