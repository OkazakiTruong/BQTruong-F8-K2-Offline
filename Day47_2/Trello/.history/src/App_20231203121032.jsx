import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selectors/selectors";

export default function App() {
  const loginSelector = useSelector(loginSelector);
  return (
    <div>
      <ToastContainer />
      <Login />
    </div>
  );
}
