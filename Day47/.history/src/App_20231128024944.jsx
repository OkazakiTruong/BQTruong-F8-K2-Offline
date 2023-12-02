import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

export default function App() {
  const selector = useSelector((state) => state);
  useEffect(() => {
    console.log(selector);
  }, selector);
  return (
    <div>
      <Login />
    </div>
  );
}
