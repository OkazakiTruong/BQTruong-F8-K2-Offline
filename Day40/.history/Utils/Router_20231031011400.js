import Navigo from "navigo";
const navigoRouter = new Navigo("/");
let r;
export const router = (listRouter, defaultLayout = null) => {
  navigoRouter
    .on({
      "/": () => {
        return "Home";
      },
      "/about": () => {
        return "About";
      },
    })
    .resolve();
};
