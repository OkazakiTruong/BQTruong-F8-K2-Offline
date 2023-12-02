import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/LoginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
export default store;
