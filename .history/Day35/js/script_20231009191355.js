import { client } from "./client.js";

const listTasks = document.querySelector(".list-tasks");
const showListTask = async () => {
  const { data: tasks } = await client.get("tasks");
  let html;
  listTasks.innerHTML = html;
};
showListTask();
