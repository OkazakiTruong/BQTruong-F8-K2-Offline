import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { config } from "./config/config.js";
import { Auth0Provider } from "@auth0/auth0-react";
const { DOMAIN, CLIENT_ID } = config;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain=DOMAIN
      clientId = CLIENT_ID=""
      authorizationParams={{
        redirect_uri: "http://localhost:5173/api/auth/callback",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
