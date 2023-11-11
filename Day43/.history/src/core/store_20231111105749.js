export const initialState = {
  products: [],
  carts: [],
  isLogin: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "products/get":
      return { ...state, products: action.payload };
    case "cart/get":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
