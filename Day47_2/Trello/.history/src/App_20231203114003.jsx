import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <ToastContainer />
      <Login />
    </div>
  );
}
