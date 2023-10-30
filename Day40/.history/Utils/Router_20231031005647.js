import Navigo from "navigo";
const navigoRouter = new Navigo("/");

export const router = (listRouter, defaultLayout = null) => {
  navigoRouter
    .on("/", function () {
      return "Hi";
    })
    .resolve();
};
