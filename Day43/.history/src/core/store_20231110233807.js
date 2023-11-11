import { client } from "../config/client";

let products;

(async () => {
  const { response, data } = await client.get("/products");
  if (response.ok) {
    products = data;
  }
})();

export const initialState = {
  products: products,
};

export const reducer = (state, action) => {
  switch (state.type) {
    case "products/update":
      return {};
  }
};
