import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selector";

export default function App() {
  const selector = useSelector(loginSelector);
  useEffect(() => {
    console.log(selector);
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}
