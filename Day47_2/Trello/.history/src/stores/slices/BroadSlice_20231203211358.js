import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUntil";

const columnsLocal = JSON.parse(localStorage.getItem("columns"));
const tasks = JSON.parse(localStorage.getItem("tasks"));
const broadSlice = createSlice({
  name: "broad",
  initialState: {
    status: "idle",
    columns: columnsLocal ? columnsLocal : [],
    tasks: tasks ? tasks : [],
  },
});
const fetchBroad = createAsyncThunk("broad/fetchBroad", async () => {
  const apiKey = localStorage.getItem("apiKey");
  if (!apiKey) {
    return false;
  }
  client.apiKey = apiKey;
  const { response, data } = await client.get("/tasks");
});
