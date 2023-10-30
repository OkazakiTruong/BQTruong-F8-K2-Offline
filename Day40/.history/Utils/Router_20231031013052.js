import Navigo from "navigo";
const navigoRouter = new Navigo("/");
let display;
export const router = (listRouter, defaultLayout = null) => {
  listRouter.forEach(({ path, component }) => {
    navigoRouter
      .on(path, () => {
        display = component();
        console.log(component());
      })
      .resolve();
  });
  return defaultLayout();
};
