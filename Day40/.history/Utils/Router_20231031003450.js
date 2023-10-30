import Navigo from "navigo";
const navigoRouter = new Navigo("/");

export const router = (listRouter, defaultLayout = null) => {
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, () => component);
    navigoRouter.resolve();
  });
  // return "hello";
};
