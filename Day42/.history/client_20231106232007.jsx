import { config } from "./config";
const { API_URL } = config;
console.log(API_URL);

export const client = {
  apiKey: null,
  setApiKey: function (key) {
    this.apiKey = key;
  },
  send: async function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    const headers = {
      "Content-type": "application/json",
    };
    if (this.apiKey) {
      headers["X-Api-Key"] = this.apiKey;
    }
    const options = {
      headers,
      method,
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
