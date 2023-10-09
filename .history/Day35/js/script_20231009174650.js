import { client } from "./client.js";

const getList = async () => {
  const { data: tasks } = await client.get("tasks");
  console.log(tasks);
};

getList();
