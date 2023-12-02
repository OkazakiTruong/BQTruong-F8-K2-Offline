import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { isLoginSelector } from "./stores/selector";

export default function App() {
  const isLogin = useSelector(isLoginSelector);
  useEffect(() => {
    console.log(selector);
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}
