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
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.columns = action.payload.columns;
        state.tasks = action.payload.tasks;
      });
  },
});
export default TodoSlice;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { response, data } = await client.get("/tasks");
  console.log(response.status);
  if (response.status === 200) {
    return data.data;
  } else if (response.status === 401) {
    localStorage.removeItem("apiKey");
    window.location.reload();
  }
});
