import { Error } from "../Error";
import Navigo from "navigo";
const navigoRouter = new Navigo("/");

const app = document.querySelector("#app");
const render = (target, content) => {
  target.innerHTML = content;
};

export const router = (listRouter, defaultLayout = null) => {
  if (defaultLayout) {
    display = defaultLayout().replace(/{body}/, body);
  }
  //Tiến hành đăng ký route
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, () => {});
  });
  navigoRouter.resolve();

  navigoRouter
    .notFound(() => {
      display = Error();
      console.log(Error());
    })
    .resolve();
};
