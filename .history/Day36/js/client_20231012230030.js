import { config } from "./config.js";
const { API_URL } = config;

const client = {
  send: async (url, method = "GET", body = null) => {
    url = API_URL + url;
    options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = fetch(url, options);
  },
};
