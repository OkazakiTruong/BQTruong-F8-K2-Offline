import { config } from "./config.js";
const { API_URL } = config;

export const client = {
  send: async function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    const options = {
      header: {
        "Content-Type": "application/json",
      },
      method,
    };
    if (body !== null) {
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
  push: function (url, body) {
    return this.send(url, "PUSH", body);
  },
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
