import { client } from "./client.js";

const getList = () => {
  const { data: tasks } = client.get("tasks");
  console.log(tasks);
};

getList();
