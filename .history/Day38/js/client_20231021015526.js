import { config } from "./config.js";
const { API_URL } = config;

export const client = {
  token: null,
  setToken: function (token) {
    this.token = token;
  },
  send: async function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    const options = {
      headers,
      method,
    };
    if (body !== null) {
      options.body = JSON.stringify(body);
      console.log(options.body);
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { data, response };
  },
  get: function (url) {
    return this.send(url);
  },
  put: function (url, body) {
    return this.send(url, "PUT", body);
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
