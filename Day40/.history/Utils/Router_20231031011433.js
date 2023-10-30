import Navigo from "navigo";
const navigoRouter = new Navigo("/");
let display;
export const router = (listRouter, defaultLayout = null) => {
  navigoRouter
    .on({
      "/": () => {
        display = "Home";
      },
      "/about": () => {
        r = "About";
      },
    })
    .resolve();
  return r;
};
