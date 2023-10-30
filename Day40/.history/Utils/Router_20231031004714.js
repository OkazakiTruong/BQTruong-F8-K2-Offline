import Navigo from "navigo";
const navigoRouter = new Navigo("/");
console.log(navigoRouter);
let render;
export const router = (listRouter, defaultLayout = null) => {
  console.log(listRouter);
  listRouter.forEach(({ path, component }) => {
    console.log(path);
    navigoRouter.on(path, function () {
      console.log("helo");
    });
  });
  return render;
};
