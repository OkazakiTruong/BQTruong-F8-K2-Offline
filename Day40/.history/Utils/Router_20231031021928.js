import { Error } from "../Error";
import Navigo from "navigo";
const navigoRouter = new Navigo("/");
let body;
let display;
let flag = false;
export const router = (listRouter, defaultLayout = null) => {
  listRouter.forEach(({ path, component }) => {
    navigoRouter
      .on(path, () => {
        body = component();
        console.log(component());
      })
      .resolve();
  });
  if (defaultLayout) {
    display = defaultLayout().replace(/{body}/, body);
  } else {
    display = body;
  }
  navigoRouter.notFound(() => {
    display = Error();
    flag = true;
  });
  console.log(flag);
  console.log(display);
  return display;
};
