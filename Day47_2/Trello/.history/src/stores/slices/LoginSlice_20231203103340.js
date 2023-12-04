import { createSlice } from "@reduxjs/toolkit";
const apiKey = localStorage.getItem("apiKey");

const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: "idle",
    isLogin: apiKey ? true : false,
  },
});
