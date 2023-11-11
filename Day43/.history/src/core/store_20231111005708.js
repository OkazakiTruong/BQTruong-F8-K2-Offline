export const initialState = {
  products: [],
  carts: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "products/get":
      return { ...state, products: action.payload };
  }
};
