import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Logout() {
  const { logout, user } = useAuth0();

  return (
    <div>
      <img src={user.picture} alt="" />
      <h2>Xin chào {user.name}</h2>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
