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
    builder.addCase;
  },
});
export const getApiKey = createAsyncThunk("login/getApiKey", async (email) => {
  const { response, data } = await client;
});
