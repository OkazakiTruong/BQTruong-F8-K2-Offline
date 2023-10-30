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
  //Tiến hành đăng ký route
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, () => {
      render(app, component);
    });
  });
  navigoRouter.resolve();

  navigoRouter
    .notFound(() => {
      render(app, Error());
    })
    .resolve();
};
