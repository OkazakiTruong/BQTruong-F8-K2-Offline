import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUntil";
import { toast } from "react-toastify";

const columnsLocal = JSON.parse(localStorage.getItem("columns"));
const tasks = JSON.parse(localStorage.getItem("tasks"));
const broadSlice = createSlice({
  name: "broad",
  initialState: {
    status: "idle",
    columns: columnsLocal ? columnsLocal : [],
    tasks: tasks ? tasks : [],
  },
  reducers: {
    updateColumns: (state, action) => {
      state.columns = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBroad.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchBroad.fulfilled, (state, action) => {
      state.status = "idle";
      console.log(action.payload);
      state.columns = action.payload.columns.map((column) => {
        return { column: column.column, columnName: column.columnName };
      });
      state.tasks = action.payload.tasks.map((task) => {
        return { id: task._id, content: task.content, column: task.column };
      });
    });
    builder.addCase(postTasks.fulfilled, (state, action) => {
      state.columns = action.payload.columns;
      state.tasks = action.payload.tasks;
    });
  },
});
export default broadSlice;
export const fetchBroad = createAsyncThunk("broad/fetchBroad", async () => {
  const apiKey = localStorage.getItem("apiKey");
  if (!apiKey) {
    toast.error("Đã có lỗi xảy ra! Tiến hành reload lại trang", {
      autoClose: 2000,
    });
    window.location.reload();
  }
  client.apiKey = apiKey;
  const { response, data } = await client.get("/tasks");
  if (response.ok) {
    return data.data;
  } else {
    localStorage.removeItem("apiKey");
    window.location.reload();
  }
});
export const postTasks = createAsyncThunk("broad/postTask", async (tasks) => {
  const apiKey = localStorage.getItem("apiKey");
  if (!apiKey) {
    toast.error("Đã có lỗi xảy ra! Tiến hành reload lại trang", {
      autoClose: 2000,
    });
    window.location.reload();
  }
  client.apiKey = apiKey;
  const { response, data } = await client.post("/tasks", tasks);
  console.log(response);
  if (response.ok) {
    return data.data;
  } else {
    localStorage.removeItem("apiKey");
    window.location.reload();
  }
});
