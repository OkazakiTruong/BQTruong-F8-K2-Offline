import Navigo from "navigo";
const navigoRouter = new Navigo("/");

let render;
export const router = (listRouter, defaultLayout = null) => {
  console.log(listRouter);
  listRouter.forEach(({ path, component }) => {
    console.log(path);
    navigoRouter.on(path, () => {
      console.log("helo");
    });
  });
  return render;
};
