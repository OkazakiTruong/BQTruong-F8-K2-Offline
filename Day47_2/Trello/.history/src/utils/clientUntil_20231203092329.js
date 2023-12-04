const apiUrl = import.meta.env.API_URL;
export const client = {
  apiKey: null,
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  app: function (url, method = "GET", body = null) {},
};
