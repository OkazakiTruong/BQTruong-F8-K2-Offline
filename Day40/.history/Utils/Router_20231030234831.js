// import Navigo from "navigo";

// const navigoRouter = new Navigo(null, true, "#!");

export const router = (listRouter, defaultLayout) => {
  listRouter.forEach((path, component) => {
    console.log(path);
  });
};
