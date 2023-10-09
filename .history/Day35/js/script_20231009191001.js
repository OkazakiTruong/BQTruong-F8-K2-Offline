import { client } from "./client.js";

const listTasks = document.querySelector(".list-tasks");
const showListTask = async () => {
  const { data: tasks } = await client.get("tasks");
  tasks.forEach((element) => {
    console.log(element);
  });
  const html = tasks
    .map(
      (task) => `
  <div class="task" data-id = '${task.id}'>
  <div class="task-content">${task.name}</div>
  <div class="task-controller">
    <button class="btn-delete">
      <i class="fa-solid fa-trash"></i>
    </button>
    <button class="btn-edit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="btn-done">
      <i class="fa-solid fa-check"></i>
    </button>
  </div>
</div>
  `
    )
    .join("");
  listTasks.innerHTML = html;
};
showListTask();
