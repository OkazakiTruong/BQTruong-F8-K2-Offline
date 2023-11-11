import { state } from "./Provider";
import { client } from "../config/client";

const getProducts = async () => {
  const {respose, data} = client.
};

export const initialState = {
  products: [],
};

export const reducer = (state, action) => {
  switch (state.type) {
    case "products/update":
      return {};
  }
};
