import { client } from "../config/client";

let products;
const getProducts = async () => {
  const { response, data } = await client.get("/products");
  if (response.ok) {
  } else {
    return "Đã có lỗi xảy ra";
  }
};

export const initialState = {
  products: getProducts().then((res) => {
    console.log(res);
    return res;
  }),
};

export const reducer = (state, action) => {
  switch (state.type) {
    case "products/update":
      return {};
  }
};
