import Navigo from "navigo";
const navigoRouter = new Navigo("/");

export const router = (listRouter, defaultLayout = null) => {
  listRouter.forEach(({ path, component }) => {
    console.log(path);
    navigoRouter.on(path, () => "hello");
    navigoRouter.resolve();
  });
  // return "hello";
};
