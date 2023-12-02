import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUtils";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: { status: "idle", data: false },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApiKey);
  },
});
export const getApiKey = createAsyncThunk("login/getApiKey", async (email) => {
  const { data } = await client.get(`/api-key?email=${email}`);
  const apiKey = data.data.apiKey;
  return data;
});
