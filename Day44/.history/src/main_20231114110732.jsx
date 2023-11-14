import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.AUTH0_DOMAIN;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mdssq6o67u1wnoud.us.auth0.com"
      clientId="5Wa0wUr68PqVAWRqg0X5dYIZuv5OLsX3"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {console.log(window.location.origin)}

      <App />
    </Auth0Provider>
  </React.StrictMode>
);
