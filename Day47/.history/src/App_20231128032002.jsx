import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { isLoginSelector } from "./stores/selector";

export default function App() {
  const login = useSelector(isLoginSelector);
  useEffect(() => {
    console.log(isLogin);
  }, []);
  return <div>{isLogin.i ? "Xin chào" : <Login />}</div>;
}
