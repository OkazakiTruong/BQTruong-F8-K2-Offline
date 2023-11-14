import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Loading from "./components/Loading";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="container">
      {/* {isLoading ? <Loading /> : ""} */}
      {isAuthenticated ? <Logout /> : <Login />}
    </div>
  );
}
