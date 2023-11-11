import { client } from "../config/client";

const getProducts = async () => {
  const { response, data } = await client.get("/products");
  if (response.ok) {
    return data;
  } else {
    return "Đã có lỗi xảy ra";
  }
};

export const initialState = {
  products: (() => {
    return getProducts();
  })(),
};

export const reducer = (state, action) => {
  switch (state.type) {
    case "products/update":
      return {};
  }
};
