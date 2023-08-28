const $ = (tag) => {
  return document.querySelector(tag);
};
const $$ = (tag) => {
  return document.querySelectorAll(tag);
};

const btnAddNewTask = $(".btn-add");

btnAddNewTask.addEventListener("click", function () {
  console.log("add new task");
});
