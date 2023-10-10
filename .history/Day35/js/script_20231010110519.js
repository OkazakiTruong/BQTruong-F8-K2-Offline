import { client } from "./client.js";

const listTasks = document.querySelector(".list-tasks");
const listTasksDone = document.querySelector(".list-tasks-done");
const btnCompleteTodos = document.querySelector(".btn-complete-todo");
const numTaskDone = btnCompleteTodos.querySelector("span");
const inputSearchTask = document.querySelector(".input-search-task");
const btnAddTask = document.querySelector(".btn-add");
const overlay = document.querySelector(".overlay");
const addNewPopup = document.querySelector(".add-new-task-popup");
const addNewPopupInput = document.querySelector(".add-new-task-popup input");
const addNewPopupCancel = document.querySelector(
  ".add-new-task-popup .btn-cancel"
);
const addNewPopupSave = document.querySelector(".add-new-task-popup .btn-save");
const editPopup = document.querySelector(".edit-task-popup");
const editPopupCancel = document.querySelector(".edit-task-popup .btn-cancel");
const editPopupSave = document.querySelector(".edit-task-popup .btn-save");
const editPopupInput = document.querySelector(".edit-task-popup input");

btnCompleteTodos.addEventListener("click", () => {
  btnCompleteTodos.classList.toggle("click");
  listTasksDone.classList.toggle("click");
});
btnAddTask.addEventListener("click", () => {
  overlay.classList.add("active");
  addNewPopup.classList.add("active");
  addNewPopupInput.value = "";
  addNewPopupInput.focus();
});
function closeAddPopup() {
  overlay.classList.remove("active");
  addNewPopup.classList.remove("active");
}
addNewPopupCancel.addEventListener("click", closeAddPopup);
addNewPopupInput.addEventListener("keyup", async (e) => {
  if (e.key === "Enter") {
    const { response } = await client.post("/tasks", {
      content: addNewPopupInput.value,
    });
    console.log(response);
    closeAddPopup();
    showListTask();
  }
});
addNewPopupSave.addEventListener("click", async () => {
  const { response } = await client.post("/tasks", {
    content: addNewPopupInput.value,
  });
  console.log(response);
  closeAddPopup();
  showListTask();
});
function openEditPopup(taskContent) {
  editPopup.classList.add("active");
  overlay.classList.add("active");
  editPopupInput.value = taskContent;
  editPopupInput.focus();
}
function closeEditPopup() {
  editPopup.classList.remove("active");
  overlay.classList.remove("active");
}
editPopupCancel.addEventListener("click", closeEditPopup);

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  addNewPopup.classList.remove("active");
  editPopup.classList.remove("active");
});

const showResultSearchTask = function () {
  const taskContents = document.querySelectorAll(".task-content");

  Array.from(taskContents).forEach((taskContent) => {
    let regexp = new RegExp(`${inputSearchTask.value}`, "i");
    if (taskContent.textContent.match(regexp)) {
      taskContent.innerHTML = taskContent.innerText.replace(
        taskContent.textContent.match(regexp),
        `<span class = "text-find">${taskContent.textContent.match(
          regexp
        )}</span>`
      );
      taskContent.parentElement.style.display = "flex";
    } else {
      taskContent.parentElement.style.display = "none";
    }
  });
};
const searchTask = function () {
  showResultSearchTask();
  inputSearchTask.addEventListener("keyup", function () {
    showResultSearchTask();
  });
};

const deleteATask = async (id, url) => {
  const { response } = await client.delete(`${url}/${id}`);
  console.log(response);
  await showListTask();
};
const editATask = async (id, url) => {
  const { response } = await client.patch(`${url}/${id}`, {
    content: editPopupInput.value,
  });
  console.log(response);
  closeEditPopup();
  showListTask();
};

const doneATask = async (id, url1, url2) => {
  const { data } = await client.get(`${url1}/${id}`);
  const content = data.content;
  await client.delete(`${url1}/${id}`);
  await client.post(`${url2}`, {
    content: content,
  });
  showListTask();
};

const addEventForTaskController = () => {
  const taskControllers = [
    ...document.querySelectorAll(".list-tasks .task-controller"),
  ];
  taskControllers.forEach((taskController) => {
    const taskId = taskController.dataset.id;
    const taskName = taskController.previousElementSibling.textContent;
    const btnDelete = taskController.querySelector(".btn-delete");
    const btnEdit = taskController.querySelector(".btn-edit");
    const btnDone = taskController.querySelector(".btn-done");

    btnDelete.addEventListener("click", () => {
      deleteATask(taskId, "/tasks");
    });
    btnEdit.addEventListener("click", function () {
      openEditPopup(taskName);
      editPopupSave.addEventListener("click", () => {
        editATask(taskId, "/tasks");
      });
      editPopupInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          editATask(taskId, "/tasks");
        }
      });
    });
    btnDone.addEventListener("click", function () {
      doneATask(taskId, "/tasks", "/tasks-done");
    });
  });
};

const addEventForTaskDoneController = () => {
  const taskControllers = [
    ...document.querySelectorAll(".list-tasks-done .task-controller"),
  ];
  taskControllers.forEach((taskController) => {
    const taskId = taskController.dataset.id;
    const taskName = taskController.previousElementSibling.textContent;
    const btnDelete = taskController.querySelector(".btn-delete");
    const btnEdit = taskController.querySelector(".btn-edit");
    const btnDone = taskController.querySelector(".btn-done");

    btnDelete.addEventListener("click", () => {
      deleteATask(taskId, "/tasks-done");
    });
    btnEdit.addEventListener("click", function () {
      openEditPopup(taskName);
      editPopupSave.addEventListener("click", () => {
        editATask(taskId, "/tasks-done");
      });
      editPopupInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          editATask(taskId, "/tasks-done");
        }
      });
    });
    btnDone.addEventListener("click", function () {
      doneATask(taskId, "/tasks-done", "/tasks");
    });
  });
};

const showListTask = async () => {
  const { data: tasks } = await client.get("/tasks");
  const { data: tasksDone } = await client.get("/tasks-done");

  const htmlTasks = tasks
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

  listTasks.innerHTML = htmlTasks;

  console.log(tasksDone);

  const htmlTasksDone = tasksDone
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

  numTaskDone.innerHTML = tasksDone.length;
  listTasksDone.innerHTML = htmlTasksDone;

  searchTask();
  addEventForTaskController();
  addEventForTaskDoneController();
};
showListTask();
