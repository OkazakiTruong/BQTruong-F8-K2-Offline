import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Logout() {
  const { logout, user } = useAuth0();

  return (
    <div>
      <h2>Xin chào</h2>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
