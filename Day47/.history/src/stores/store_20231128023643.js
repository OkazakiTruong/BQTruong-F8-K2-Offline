import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/LoginSlice";

const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});
export default store;
