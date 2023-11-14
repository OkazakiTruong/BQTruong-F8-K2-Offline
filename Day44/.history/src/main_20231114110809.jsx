import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
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
