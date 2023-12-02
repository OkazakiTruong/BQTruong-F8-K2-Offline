import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUtils";
const apiKey = localStorage.getItem("apiKey");

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: "idle",
    isLogin: apiKey ? true : false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApiKey.pending, (state, action) => {
        state.status = "pending";
        console.log("loading");
      })
      .addCase(getApiKey.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLogin = true;
        client.apiKey = action.payload;
        console.log("Đăng nhập thành công");
      });
  },
});
export const getApiKey = createAsyncThunk("login/getApiKey", async (email) => {
  const { data } = await client.get(`/api-key?email=${email}`);
  const apiKey = data.data.apiKey;
  return apiKey;
});
