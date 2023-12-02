import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selector";
import Home from "./pages/Home/Home";

export default function App() {
  const login = useSelector(loginSelector);
  useEffect(() => {
    console.log(login);
  }, []);
  return <div>{!login.isLogin ? <Login /> : <Home />}</div>;
}
