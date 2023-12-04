const apiUrl = import.meta.env.API_URL;
export const client = {
  apiKey: null,
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  app: async function (url, method = "GET", body = null) {
    url = `${apiUrl}${url}`;
    const headers = {
      "Content-type": "application-json",
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
    const data = await response.json();
    return { response, data };
  },
  get: function (url) {
    return this.app(url);
  },
};
