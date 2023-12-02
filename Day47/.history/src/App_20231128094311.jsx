import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selector";
import Loading from "./components/Loading/Loading";

export default function App() {
  const login = useSelector(loginSelector);
  useEffect(() => {
    console.log(login);
  }, []);
  return <div>{!login.isLogin ? <Login /> : <Loading />}</div>;
}
