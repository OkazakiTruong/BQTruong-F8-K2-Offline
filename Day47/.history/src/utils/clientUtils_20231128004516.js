export const client = {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: null,
  app: async function (url, method = "GET", body = null) {
    url = `${this.apiUrl}${url}`;
    const headers = {
      "Content-type": "application/json",
    };
    if (this.apiKey) {
      headers["X-Api-Key"] = this.apiKey;
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
    }
  },
};
