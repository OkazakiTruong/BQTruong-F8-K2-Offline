const Navigo = require("navigo");
const navigoRouter = new Navigo("/");

export const router = ({ listRoute, defaultLayout }) => {
  listRoute.forEach(({ path, component }) => {
    navigoRouter
      .on(path, function (param) {
        console.log(param);
      })
      .resolve();
  });
};
