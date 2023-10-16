import { config } from "./config.js";
const { API_URL } = config;

export const client = {
  send: function (url, method = "GET") {},
};
