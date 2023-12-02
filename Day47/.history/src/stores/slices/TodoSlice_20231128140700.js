import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    status: "idle",
    todos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});
