import Navigo from "navigo";
const navigoRouter = new Navigo("/");
console.log(navigoRouter);
let render;
export const router = (listRouter, defaultLayout = null) => {
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, function () {
      render = component;
    });
  });
  return render;
};
