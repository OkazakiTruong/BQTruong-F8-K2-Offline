import { Home } from "./Page/Home";
import { About } from "./Page/About";
import { Product } from "./Page/Products";
import { router } from "./Utils/router";

export const App = () => {
  return router([
    {
      path: "/",
      component: Home,
    },
  ]);
};
