export const initialState = {
  products: [],
  carts: [],
  userProfile: {},
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "userProfile/update":
      return { ...state, userProfile: [...state.carts, action.payload] };
    case "products/get":
      return { ...state, products: action.payload };
    case "cart/set":
      return { ...state, carts: action.payload };
    default:
      return state;
  }
};
