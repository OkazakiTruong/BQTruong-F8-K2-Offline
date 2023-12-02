export const client = {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: null,
  app: async function (url, method = "GET", body = null) {},
};
