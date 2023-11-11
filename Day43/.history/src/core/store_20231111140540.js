export const initialState = {
  products: [],
  carts: [],
  userProfile: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "userProfile/update":
      return { ...state, userProfile: action.payload };
    case "products/get":
      return { ...state, products: action.payload };
    case "cart/get":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
