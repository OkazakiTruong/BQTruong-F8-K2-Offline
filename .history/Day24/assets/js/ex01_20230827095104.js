const $ = (tag) => {
  return document.querySelector(tag);
};
const $$ = (tag) => {
  return document.querySelectorAll(tag);
};

const btnAddNewTask = $(".btn-add");
const thingTodoList = $(".thing-todo-list");
const newTask = $(".new-task");
const tasks = thingTodoList.querySelectorAll(".task");
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
    const task = new tasks();
  }
};
btnAddNewTask.addEventListener("click", addNewTask);

//Su kien hoan thanh 1 task
for (let i = 0; i < tasks.length; i++) {
  tasks[i].addEventListener("click", function (e) {
    console.log(e);
  });
}
