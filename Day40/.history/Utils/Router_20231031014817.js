import { Error } from "../Error";
import Navigo from "navigo";
const navigoRouter = new Navigo("/");
let body;
export const router = (listRouter, defaultLayout = null) => {
  listRouter.forEach(({ path, component }) => {
    navigoRouter
      .on(path, () => {
        body = component();
        console.log(component());
      })
      .resolve();
  });
  navigoRouter.notFound(() => {
    body = Error();
  });
  return defaultLayout();
};
