import { config } from "./config";
const { API_URl } = config;

export const client = {
  apiKey: null,
  setApiKey: function (key) {
    this.apiKey = key;
  },
};
