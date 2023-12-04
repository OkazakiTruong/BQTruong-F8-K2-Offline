import { createSlice } from "@reduxjs/toolkit";

const columnsLocal = JSON.parse(localStorage.getItem("columns"));
const tasks = JSON.parse(localStorage.getItem("tasks"));
const broadSlice = createSlice({
  name: broad,
  initialState: {
    status: "idle",
    columns: columnsLocal ? columnsLocal : [],
    tasks: tasks ? tasks : [],
  },
});
