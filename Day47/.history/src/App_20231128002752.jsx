import React, { useEffect } from "react";
import Login from "./components/Login/Login";

const apiUrl = import.meta.env.API_URL;
export default function App() {
  useEffect(() => {
    console.log(apiUrl);
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
