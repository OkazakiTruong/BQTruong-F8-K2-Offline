import React, { useEffect } from "react";
import Login from "./components/Login/Login";

export default function App() {
  useEffect(() => {
    console.log(import.meta.env);
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
