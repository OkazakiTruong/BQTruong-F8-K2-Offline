import { config } from "./config";
const { API_URl } = config;

export const client = {
  apiKey: null,
  setKey: function (key) {
    this.apiKey = key;
  },
};
