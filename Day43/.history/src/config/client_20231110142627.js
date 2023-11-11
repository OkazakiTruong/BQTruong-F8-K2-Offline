import { config } from "./config";

export const client = {
  apiKey: "",
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  app: function (url, method = "GET", body) {},
};
