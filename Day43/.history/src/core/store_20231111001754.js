export const initialState = {
  products: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "products/get":
      return { ...state, products: action.payload };
  }
};
