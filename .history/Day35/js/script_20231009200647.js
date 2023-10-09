import { client } from "./client.js";

const listTasks = document.querySelector(".list-tasks");
const showListTask = async () => {
  const { data: tasks } = await client.get("tasks");
  let html;
  tasks.foreach((task) => {
    html += `
    <div class="task">
          <div class="task-content">${task.content}</div>
          <div class="task-controller" data-id ="${task.id}">
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
    `;
  });
  listTasks.innerHTML = html;
};
showListTask();
