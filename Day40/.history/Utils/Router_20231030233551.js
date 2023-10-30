import { Navigo } from "navigo";
export const router = ({ listRoute, defaultLayout }) => {
  listRoute.forEach(({ path, component }) => {
    navigoRouter
      .on(path, function (param) {
        console.log(param);
      })
      .resolve();
  });
};
