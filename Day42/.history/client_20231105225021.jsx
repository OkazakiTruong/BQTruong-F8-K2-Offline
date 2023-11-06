import { config } from "./config";
const {API_URL} = config

export const client = {
  apiKey: null,
  setApiKey: (apiKey) => {
    this.apiKey = apiKey;
  },
  send: function (url, method = "GET", body = null) {
    url = `${url}${}`
  },
};
