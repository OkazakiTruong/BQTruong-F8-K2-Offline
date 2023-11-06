import { config } from "./config";
const { API_URl } = config;

export const client = {
  apiKey: null,
  setApiKey: function (key) {
    this.apiKey = key;
  },
  send: function (url, method = "GET", body = null) {
    url = `${API_URl}${url}`;
    const header = {
      "Content-type": "application/json",
    };
    if (this.apiKey) {
      header["X-Api-Key"] = this.apiKey;
    }
    const option = {
      header,
      method,
    };
  },
};
