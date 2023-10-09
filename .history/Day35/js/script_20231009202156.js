import { client } from "./client.js";

const listTasks = document.querySelector(".list-tasks");
const showListTask = async () => {
  const { data: tasks } = await client.get("tasks");
  const html = tasks
    .map(
      (task) => `
  <div class="task" >
  <div class="task-content">${task.content}</div>
  <div class="task-controller" data-id = ${task.id}>
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
  addEventForTaskController();
};
showListTask();

const addEventForTaskController = () => {
  const taskControllers = document.querySelector(".task-controller");
  taskControllers.foreach((taskController) => {
    console.log(taskController);
  });
};
