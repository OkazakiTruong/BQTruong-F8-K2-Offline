import { Home } from "./Page/Home";
import { About } from "./Page/About";
import { Product } from "./Page/Products";
import { router } from "./Utils/router";
import { defaultLayout } from "./Layouts/defaultLayout";

export const App = () => {
  return router(
    [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/product",
        component: Product,
      },
      {
        path: "/product-detail/id",
        component: ProductDetail,
      },
    ],
    defaultLayout
  );
};
