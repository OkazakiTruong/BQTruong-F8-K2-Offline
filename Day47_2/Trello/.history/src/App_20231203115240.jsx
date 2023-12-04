import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={4900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Login />
    </div>
  );
}
