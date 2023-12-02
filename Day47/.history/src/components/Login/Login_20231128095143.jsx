import React, { useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { getApiKey } from "../../stores/slices/LoginSlice";
import { loginSelector } from "../../stores/selector";
import Loading from "../Loading/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const login = useSelector(loginSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getApiKey(email));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <>
      {login.status === "loading" ? <Loading /> : ""}
      <div className="login-wrapper">
        <h1>Sử dụng email để có thể đăng nhập Chello nhé!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Nhập vào email của bạn!!"
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}
