import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mdssq6o67u1wnoud.us.auth0.com"
      clientId="MQMmDWplXaFCYP5CM9x0khUlrf5z4DqZ"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
