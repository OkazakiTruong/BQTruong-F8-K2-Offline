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
    // console.log(data.data);
    return data.data;
  } else {
    localStorage.removeItem("apiKey");
    window.location.reload();
  }
});
