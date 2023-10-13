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
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = fetch(url, options);
  },
};
