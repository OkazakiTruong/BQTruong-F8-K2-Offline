import { config } from "./config";
const { API_URL } = config;

export const client = {
  apiKey: null,
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  app: function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    headers = {
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
    }
  },
  get: function (url) {
    return this.app(url);
  },
};
