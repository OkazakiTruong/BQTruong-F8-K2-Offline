import Navigo from "navigo";
const navigoRouter = new Navigo("/");
let r;
export const router = (listRouter, defaultLayout = null) => {
  navigoRouter.on({
    "/": () => {
      r = "Home";
    },
    "/about": () => {
      return "About";
    },
  });
  return "home";
};
