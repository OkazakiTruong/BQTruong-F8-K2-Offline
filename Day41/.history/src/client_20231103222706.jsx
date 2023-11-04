export const client = {
  app: function (url, method = "GET", body = null) {
    url = `${process.env.API_ENDPOINT}${url}`;
  },
};
