import { config } from "./config";
const { API_URL } = config;

export const client = {
  apiKey: "",
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  app: function (url, method = "GET", body) {
    url = `${API_URL}${url}`;
  },
};
