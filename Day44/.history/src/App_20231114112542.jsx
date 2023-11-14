import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">{isAuthenticated ? <Logout /> : <Login />}</div>
  );
}
