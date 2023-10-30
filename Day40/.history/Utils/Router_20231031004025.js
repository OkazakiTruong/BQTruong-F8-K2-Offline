import Navigo from "navigo";
const navigoRouter = new Navigo("/");

export const router = (listRouter, defaultLayout = null) => {
  console.log(listRouter);
  listRouter.forEach((element) => {});
};
