export const client = {
  send: function (url, method = "GET", body = null) {
    url = `${process.env.API_ENDPOINT}${url}`;
    const headers = {
      "Content-type": "application/json",
    };
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
  },
};
