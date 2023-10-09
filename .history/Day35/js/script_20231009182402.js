import { client } from "./client.js";

const getList = async () => {
  console.log(tasks);
};

const showListTask = async () => {
  const { data: tasks } = await client.get("tasks");
};
