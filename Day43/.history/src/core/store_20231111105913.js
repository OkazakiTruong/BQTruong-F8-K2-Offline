export const initialState = {
  products: [],
  carts: [],
  isLogin: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "login/get":
      return { ...state, isLogin: action.payload };
    case "products/get":
      return { ...state, products: action.payload };
    case "cart/get":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
