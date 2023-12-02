import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selector";

export default function App() {
  const login = useSelector(loginSelector);
  useEffect(() => {
    console.log(login);
  }, []);
  return (
    <div>
      {login.status === "loading" ? "Loading..." : ""}
      {login.isLogin ? "Xin chào" : <Login />}
    </div>
  );
}
