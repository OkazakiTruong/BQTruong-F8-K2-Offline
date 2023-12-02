import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUtils";

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    status: "idle",
    columns: [],
    tasks: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, actions) => {});
  },
});
export default TodoSlice;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { response, data } = await client.get("/tasks");
  if (response.ok) {
    console.log(data);
  } else {
    localStorage.removeItem("apiKey");
    window.location.reload();
  }
});
