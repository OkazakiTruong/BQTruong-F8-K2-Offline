import Navigo from "navigo";

const navigoRouter = new Navigo(null, true, "#!");

export const router = async (listRouter, defaultLayout = null) => {
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, function () {
      return "Xin chào";
    });
    navigoRouter.resolve();
  });
};
