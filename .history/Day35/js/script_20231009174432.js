import { client } from "./client.js";

const getList = async () => {
  const { data: tasks } = client.get("/tasks");
  console.log(tasks);
};

getList();
