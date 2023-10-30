import Navigo from "navigo";

const navigoRouter = new Navigo(null, true, "#!");

export const router = ({ listRoute, defaultLayout }) => {
  Array.from(listRoute).forEach(({ path, component }) => {
    navigoRouter
      .on(path, function (param) {
        console.log(param);
      })
      .resolve();
  });
};
