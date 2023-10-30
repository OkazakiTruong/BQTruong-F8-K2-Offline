import { Error } from "../Error";
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
  navigoRouter.notFound(() => {
    console.log(Error());
  });
  return defaultLayout();
};
