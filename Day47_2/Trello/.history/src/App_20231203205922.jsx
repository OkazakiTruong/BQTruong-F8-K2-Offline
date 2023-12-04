import React, { useEffect, useState } from "react";
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selectors/selectors";
import Broad from "./pages/Broad/Broad";

export default function App() {
  const loginState = useSelector(loginSelector);
  useState(() => {
    if (loginState.isLogin) {
      toast.success("Login success", {
        autoClose: 2000,
      });
    }
  }, [loginState.isLogin]);

  return (
    <div>
      <ToastContainer />
      {!loginState.isLogin ? <Login /> : <Broad />}
    </div>
  );
}
