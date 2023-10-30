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
        display = "About";
      },
    })
    .resolve();
  return r;
};
