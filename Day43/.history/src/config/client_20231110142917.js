import { config } from "./config";
const { API_URL } = config;

export const client = {
  apiKey: "",
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  app: function (url, method = "GET", body) {
    url = `${API_URL}${url}`;
    headers = {
      "Content-type": "application/json",
    };
  },
  get: function (url) {
    return this.app(url);
  },
};
