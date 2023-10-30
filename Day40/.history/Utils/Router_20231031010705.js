import Navigo from "navigo";
const navigoRouter = new Navigo("/");

export const router = (listRouter, defaultLayout = null) => {
  navigoRouter.on({
    "/": () => {
      return "Home";
    },
    "/about": () => {
      console.log("about");
    },
  });
};
