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
    const response = await fetch(url, options);
    const data = await response.json();
    return { response, data };
  },
  get: function (url) {
    return this.send(url);
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
};
