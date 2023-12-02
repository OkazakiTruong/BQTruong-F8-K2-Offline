import React, { useEffect } from "react";
import Login from "./components/Login/Login";

export default function App() {
  useEffect(() => {
    const apiUrl = import.meta.env.API_URL;
    console.log(apiUrl);
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
