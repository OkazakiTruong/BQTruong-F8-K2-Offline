const $ = (tag) => {
  return document.querySelector(tag);
};
const $$ = (tag) => {
  return document.querySelectorAll(tag);
};

const btnAddNewTask = $(".btn-add");
const thingTodoList = $(".thing-todo-list");

btnAddNewTask.addEventListener("click", function () {
  console.log("add new task");
});

const addNewTask = function () {
  const task = document.createElement("p");
  task.classList.add("task");
};
