const $ = (tag) => {
  return document.querySelector(tag);
};
const $$ = (tag) => {
  return document.querySelectorAll(tag);
};

const btnAddNewTask = $(".btn-add");
const thingTodoList = $(".thing-todo-list");

const addNewTask = function () {
  const thingTodoItem = document
    .createElement("div")
    .classList.add("thing-todo-item");
  //   thingTodoItem.innerHTML = `
  //     <p class="task">Task 1</p>
  //     <div class="task-controllers">
  //       <div class="edit-task">
  //         <i class="fa-solid fa-pen-to-square"></i>
  //       </div>
  //       <div class="delete-task">
  //         <i class="fa-solid fa-trash"></i>
  //       </div>
  //     `;
};

btnAddNewTask.addEventListener("click", addNewTask);
