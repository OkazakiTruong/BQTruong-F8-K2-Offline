import { config } from "./config.js";
const { API_URL } = config;

export const client = {
  send: function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    const options = {
      header: {
        Headers: "Content-type:application/json",
      },
    };
  },
};
