import { Home } from "./Page/Home";
import { router } from "./Utils/router";

export const App = () => {
  return router(
    [
      {
        path: "/",
        component: Home,
      },
    ],
    {
      name: "Xin chào",
    }
  );
};
