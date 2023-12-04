import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selectors/selectors";

export default function App() {
  const loginState = useSelector(loginSelector);
  return (
    <div>
      <ToastContainer />
      {!loginState.isLogin ? <Login /> : "Đăng nhập thành công"}
    </div>
  );
}
