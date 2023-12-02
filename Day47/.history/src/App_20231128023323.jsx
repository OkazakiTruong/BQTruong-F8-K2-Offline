import React, { useEffect } from "react";
import Login from "./components/Login/Login";

import { UseSelector } from "react-redux/es/hooks/useSelector";

export default function App() {
  const selector = UseSelector((state) => state);
  useEffect(() => {
    console.log(selector);
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}
