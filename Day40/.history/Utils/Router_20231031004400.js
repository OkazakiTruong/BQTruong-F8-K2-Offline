import Navigo from "navigo";
const navigoRouter = new Navigo("/");

let render;
export const router = (listRouter, defaultLayout = null) => {
  console.log(listRouter);
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, () => {
      console.log(component);
    });
  });
  return render;
};
