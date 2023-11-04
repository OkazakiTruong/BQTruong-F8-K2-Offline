export const client = {
  send: function (url, method = "GET", body = null) {
    url = `${process.env.API_ENDPOINT}${url}`;
  },
};
