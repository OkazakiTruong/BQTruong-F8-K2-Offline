import { config } from "./config";

export const client = {
    apiKey : nulll;
  setApiKey: (apiKey) => {
    this.apiKey = apiKey;
  },
  send: function (url, method = "GET", body = null) {},
};
