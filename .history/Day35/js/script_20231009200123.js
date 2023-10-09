import { client } from "./client.js";

const listTasks = document.querySelector(".list-tasks");
const showListTask = async () => {
  const { data: tasks } = await client.get("tasks");
  let html;
  tasks.foreach((task) => {
    html += `
    
    
    `;
  });
  listTasks.innerHTML = html;
};
showListTask();
