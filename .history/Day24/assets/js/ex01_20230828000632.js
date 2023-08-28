const $ = (tag) => {
  return document.querySelector(tag);
};
const $$ = (tag) => {
  return document.querySelectorAll(tag);
};

const btnAddNewTask = $(".btn-add");
const thingTodoList = $(".thing-todo-list");
const newTask = $(".new-task");

// Hàm hoan thanh 1 task
const finishATask = function (tasks) {
  tasks[tasks.length - 1].addEventListener("click", function () {
    this.classList.toggle("done-task");
  });
};
//Hàm xóa task
const deleteATask = function (listDeleteTasks, listThingTodoItem) {
  listDeleteTasks[listDeleteTasks.length - 1].addEventListener(
    "click",
    function () {
      listThingTodoItem[listThingTodoItem.length - 1].remove();
    }
  );
};

// Su kien them moi 1 task
const checkTaskBeforeAdd = function (task) {
  if (task.trim() === "") {
    return false;
  }
  return true;
};
const addNewTask = function () {
  const thingTodoItem = document.createElement("div");
  thingTodoItem.classList.add("thing-todo-item");
  thingTodoItem.innerHTML = `
      <p class="task">${newTask.value}</p>
      <div class="task-controllers">
        <div class="edit-task">
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div class="delete-task">
          <i class="fa-solid fa-trash"></i>
        </div>
      `;
  if (checkTaskBeforeAdd(newTask.value)) {
    thingTodoList.appendChild(thingTodoItem);
    const tasks = thingTodoList.querySelectorAll(".task");
    const listDeleteTasks = thingTodoList.querySelectorAll(".delete-task");
    const listThingTodoItem =
      thingTodoList.querySelectorAll(".thing-todo-item");
    const listBtnEdit = thingTodoList.querySelectorAll(".btn-edit");
    const listEditorWrapper = thingTodoList.querySelectorAll(".editor-wrapper");
    finishATask(tasks);
    deleteATask(listDeleteTasks, listThingTodoItem);
    editATask(listBtnEdit, listEditorWrapper);
  }
};

btnAddNewTask.addEventListener("click", addNewTask);
