import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUtils";
const apiKey = localStorage.getItem("apiKey");

const loginSlice = createSlice({
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
export default loginSlice;

// export const getApiKey = (email) => {
//   return async (dispatch, getState) => {
//     const { response, data } = await client.get(`/api-key?email=${email}`);
//     console.log(response);
//     if (response.ok) {
//       localStorage.setItem("apiKey", data.data.apiKey);
//       dispatch(loginSlice.actions.login());
//     } else {
//       localStorage.removeItem("apiKey");
//       dispatch(loginSlice.actions.logout());
//     }
//   };
// };

export const getApiKey2 = createAsyncThunk("login/getApiKey", async (email) => {
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    localStorage.setItem("apiKey", data.data.apiKey);
  } else {
    localStorage.removeItem("apiKey");
  }
});
