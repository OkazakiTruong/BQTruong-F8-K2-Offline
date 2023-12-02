import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selector";

export default function App() {
  useEffect(() => {
    console.log(login);
  }, []);
  return <div>{login.isLogin ? "Xin chào" : <Login />}</div>;
}
