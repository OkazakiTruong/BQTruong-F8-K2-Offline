import { config } from "./config.js";
const { API_URL } = config;

const client = {
  send: async (url, method = "GET", options) => {
    url = API_URL + url;
  },
};
