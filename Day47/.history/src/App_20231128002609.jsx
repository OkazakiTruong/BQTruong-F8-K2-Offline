import React, { useEffect } from "react";
import Login from "./components/Login/Login";

export default function App() {
  useEffect(() => {
    const apiUrl = import.meta.env.API_KEY;
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
