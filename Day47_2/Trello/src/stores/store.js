import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/LoginSlice";
import broadSlice from "./slices/BroadSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    broad: broadSlice.reducer,
  },
});

export default store;
