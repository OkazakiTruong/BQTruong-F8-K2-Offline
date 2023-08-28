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
//Hàm sửa task
const editATask = function (
  tasks,
  listEditTask,
  listEditorWrapper,
  listTaskWrapper
) {
  listEditTask[listEditTask.length - 1].addEventListener("click", function () {
    listEditorWrapper[listEditorWrapper.length - 1].style.display = "flex";
    listTaskWrapper[listTaskWrapper.length - 1].style.display = "none";
    const taskEditor =
      listEditorWrapper[listEditorWrapper.length - 1].querySelector(
        "task-editor"
      );
    taskEditor.value = tasks[tasks.length - 1].value;
  });
};

// Su kien them moi 1 task
const checkTaskBeforeAdd = function (task) {
  if (task.trim() === "") {
    return false;
  }
  return true;
};
const addNewTask = function () {
  if (checkTaskBeforeAdd(newTask.value)) {
    const thingTodoItem = document.createElement("div");
    thingTodoItem.classList.add("thing-todo-item");
    thingTodoItem.innerHTML = `
    <div class="editor-wrapper">
      <input
        type="text"
        class="task-editor"
        placeholder="What is the task today"
      />
      <button class="btn-edit">Add task</button>
    </div>
    <div class="task-wrapper">
      <p class="task">${newTask.value}</p>
      <div class="task-controllers">
        <div class="edit-task">
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div class="delete-task">
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
        `;
    thingTodoList.appendChild(thingTodoItem);

    //xu ly tac vu khac
    const tasks = thingTodoList.querySelectorAll(".task");
    const listDeleteTasks = thingTodoList.querySelectorAll(".delete-task");
    const listThingTodoItem =
      thingTodoList.querySelectorAll(".thing-todo-item");
    const listEditTask = thingTodoList.querySelectorAll(".edit-task");
    const listEditorWrapper = thingTodoList.querySelectorAll(".editor-wrapper");
    const listTaskWrapper = thingTodoList.querySelectorAll(".task-wrapper");
    finishATask(tasks);
    deleteATask(listDeleteTasks, listThingTodoItem);
    editATask(listEditTask, listEditorWrapper, listTaskWrapper);
  }
};

btnAddNewTask.addEventListener("click", addNewTask);
