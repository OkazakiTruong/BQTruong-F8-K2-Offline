import { config } from "./config.js";
const { SERVER_API } = config;

export const client = {
  send: async (url, method = "GET", body = null) => {
    SERVER_API = SERVER_API + url;
    const options = {
      method,
      header: "Content-type: application/json",
    };
    if (body) {
      options.body = body;
    }
    let response = await fetch(SERVER_API, options);
    let data = await response.json();
    return { response, data };
  },
  get: function (url) {
    return this.send(url);
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
};
