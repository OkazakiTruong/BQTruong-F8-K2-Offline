import { client } from "../config/client";

let listProducts;

(async () => {
  const { response, data } = await client.get("/products");
  if (response.ok) {
    listProducts = data;
  }
})();

export const initialState = {
  products: listProducts,
};

export const reducer = (state, action) => {
  switch (state.type) {
    case "products/update":
      return {};
  }
};
