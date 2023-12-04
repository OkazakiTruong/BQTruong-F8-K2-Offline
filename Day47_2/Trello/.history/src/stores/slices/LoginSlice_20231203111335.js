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
    builder.addCase(getApiKey.fulfilled, (state, action) => {
      console.log(action);
      state.isLogin = action.payload;
    });
  },
});
export default loginSlice;

export const getApiKey = createAsyncThunk("login/getApiKey", async (email) => {
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    console.log(data.data.apiKey);
  } else {
  }
});
