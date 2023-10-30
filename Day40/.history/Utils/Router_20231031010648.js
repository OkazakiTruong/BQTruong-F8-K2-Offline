import Navigo from "navigo";
const navigoRouter = new Navigo("/");

export const router = (listRouter, defaultLayout = null) => {
  navigoRouter.on({
    "/": () => {
      console.log("home");
    },
    "/about": () => {
      console.log("about");
    },
  });
  console.log("hello");
};
