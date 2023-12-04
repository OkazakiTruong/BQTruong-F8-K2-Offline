import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/LoginSlice";
import { Default } from "react-toastify/dist/utils";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default store;
