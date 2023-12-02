import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUtils";
const apiKey = localStorage.getItem("apiKey");

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    status: "idle",
    isLogin: apiKey ? true : false,
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});
export default LoginSlice;

export const getApiKey = (email) => {
  return async (dispatch, getState) => {
    const { response, data } = client.get(`/api-key?email=${email}`);
    if (response.ok) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };
};
