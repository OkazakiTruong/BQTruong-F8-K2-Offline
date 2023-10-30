import { Navigo } from "navigof";
const navigoRouter = new Navigo("/");

export const router = (listRouter, defaultLayout = null) => {
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, () => "xin chào");
    navigoRouter.resolve();
  });
};
