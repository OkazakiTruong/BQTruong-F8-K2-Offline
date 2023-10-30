import Navigo from "navigo";
const navigoRouter = new Navigo((root = null), (useHash = false));
console.log(navigoRouter);
export const router = (listRouter, defaultLayout = null) => {
  navigoRouter.on("/about", function () {
    return "Home";
  });
  navigoRouter.resolve();
};
