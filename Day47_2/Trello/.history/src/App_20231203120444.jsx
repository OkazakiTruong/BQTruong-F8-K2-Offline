import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <Login />
    </div>
  );
}
