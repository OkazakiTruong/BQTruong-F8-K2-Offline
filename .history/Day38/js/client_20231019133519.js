import { config } from "./config.js";
const { API_URL } = config;

export const client = {
  send: async function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    const options = {
      header: {
        Headers: "Content-type:application/json",
      },
      method,
    };
    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = response.json();
    return { data, response };
  },
};
