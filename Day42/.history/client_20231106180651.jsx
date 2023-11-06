import { config } from "./config";
const { API_URl } = config;

export const client = {
  apiKey: null,
  setApiKey: function (key) {
    this.apiKey = key;
  },
  send: async function (url, method = "GET", body = null) {
    url = `${API_URl}${url}`;
    const header = {
      "Content-type": "application/json",
    };
    if (this.apiKey) {
      header["X-Api-Key"] = this.apiKey;
    }
    const options = {
      header,
      method,
    };
    if (body) {
      options.body = body;
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { response, data };
  },
  get: function () {
    return;
  },
};
