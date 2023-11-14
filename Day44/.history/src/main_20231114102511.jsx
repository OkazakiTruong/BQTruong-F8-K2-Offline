import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { config } from "./config/config.js";
import { Auth0Provider } from "@auth0/auth0-react";
const { domain, clientId } = config;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      clientId="MQMmDWplXaFCYP5CM9x0khUlrf5z4DqZ"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/api/auth/callback",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
