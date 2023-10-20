import { config } from "./config.js";
console.log(config);
const { API_URL } = config;

export const client = {
  send: async function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    const options = {
      header: {
        Headers: "Content-type:application/json",
      },
      method,
    };
    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = response.json();
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
