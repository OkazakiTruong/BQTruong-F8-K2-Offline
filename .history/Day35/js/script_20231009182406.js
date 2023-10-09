import { client } from "./client.js";

const showListTask = async () => {
  const { data: tasks } = await client.get("tasks");
};
