import { client } from "./client.js";

const listTasks = document.querySelector(".list-tasks");
const inputSearchTask = document.querySelector(".input-search-task");
const btnAddTask = document.querySelector(".btn-add");
const overlay = document.querySelector(".overlay");
const addNewPopup = document.querySelector(".add-new-task-popup");
const addNewPopupCancel = document.querySelector(
  ".add-new-task-popup .btn-cancel"
);

btnAddTask.addEventListener("click", () => {
  overlay.classList.add("active");
  addNewPopup.classList.add("active");
});
addNewPopupCancel.addEventListener("click", () => {
  overlay.classList.remove("active");
  addNewPopup.classList.remove("active");
});
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  addNewPopup.classList.remove("active");
});

const showResultSearchTask = function () {
  const taskContents = document.querySelectorAll(".task-content");
  if (inputSearchTask.value === "") {
    showListTask();
  } else {
    Array.from(taskContents).forEach((taskContent) => {
      let regexp = new RegExp(`${inputSearchTask.value}`, "gi");
      if (taskContent.textContent.match(regexp)) {
        taskContent.parentElement.style.display = "flex";
      } else {
        taskContent.parentElement.style.display = "none";
      }
    });
  }
};
const searchTask = function () {
  showResultSearchTask();
  inputSearchTask.addEventListener("keyup", function () {
    showResultSearchTask();
  });
};

const deleteATask = async (id) => {
  await client.delete(`tasks/${id}`);
};

const addEventForTaskController = () => {
  const taskControllers = [...document.querySelectorAll(".task-controller")];
  taskControllers.forEach((taskController) => {
    const taskId = taskController.dataset.id;
    const btnDelete = taskController.querySelector(".btn-delete");
    const btnEdit = taskController.querySelector(".btn-edit");
    const btnDone = taskController.querySelector(".btn-done");

    btnDelete.addEventListener("click", async () => {
      await deleteATask(taskId);
      await showListTask();
    });
    btnEdit.addEventListener("click", function () {
      console.log("edit");
    });
    btnDone.addEventListener("click", function () {
      console.log("done");
    });
  });
};

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
  searchTask();
  addEventForTaskController();
};
showListTask();
