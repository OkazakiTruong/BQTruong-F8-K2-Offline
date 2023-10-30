import { Error } from "../Error";
import Navigo from "navigo";
const navigoRouter = new Navigo("/");

const app = document.querySelector("#app");
const render = (target, content) => {
  target.innerHTML = content;
};

export const router = (listRouter, defaultLayout = null) => {
  if (defaultLayout) {
    render(app, defaultLayout());
  }
  let body = document.querySelector(".right");
  //Tiến hành đăng ký route
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, () => {
      render(body, component);
    });
  });
  navigoRouter.notFound(() => {
    render(app, Error());
  });
  navigoRouter.resolve();
};
