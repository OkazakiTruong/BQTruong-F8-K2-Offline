import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUtils";
const apiKey = localStorage.getItem("apiKey");

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: "idle",
    isLogin: apiKey ? true : false,
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
  },
});
export const getApiKey = (email) => {
  return async (dispatch, getState) => {
    console.log(getState());
  };
};
