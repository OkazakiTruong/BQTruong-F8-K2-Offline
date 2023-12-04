import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUntil";
const apiKey = localStorage.getItem("apiKey");

const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: "idle",
    isLogin: apiKey ? true : false,
  },
  extraReducers: (builder) => {
    builder.addCase(getApiKey.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getApiKey.fulfilled, (state, action) => {
      state.isLogin = action.payload;
      if (action.payload) {
        state.status = "idle";
      } else {
        state.status = "rejected";
        setTimeout(() => {
          state.status = "idle";
        }, 2000);
      }
    });
  },
});
export default loginSlice;

export const getApiKey = createAsyncThunk("login/getApiKey", async (email) => {
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    return true;
  } else {
    return false;
  }
});
