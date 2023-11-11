import { config } from "./config";
const { API_URL } = config;

export const client = {
  apiKey: null,
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  app: async function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    headers = {
      "Content-type": "application/json",
    };
    if (this.apiKey) {
      headers["X-Api-Key"] = this.apiKey;
    }
    const options = {
      headers,
      method,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.JSON();
    return { response, data };
  },
  get: function (url) {
    return this.app(url);
  },
  post: function (url, body) {
    return this.app(url, "POST", body);
  },
  put: function (url, body) {
    return this.app(url, "PUT", body);
  },
  patch: function (url, body) {
    return this.app(url, "PATCH", body);
  },
  delete: function (url) {
    return this.app(url, "DELETE");
  },
};
