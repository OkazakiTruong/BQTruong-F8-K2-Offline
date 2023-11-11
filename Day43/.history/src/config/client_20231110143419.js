import { config } from "./config";
const { API_URL } = config;

export const client = {
  apiKey: null,
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  app: await function (url, method = "GET", body = null) {
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
      options.body = JSON.stringify(body);
    }
    
    const response = async fetch(url,options),
  },
  get: function (url) {
    return this.app(url);
  },
};
