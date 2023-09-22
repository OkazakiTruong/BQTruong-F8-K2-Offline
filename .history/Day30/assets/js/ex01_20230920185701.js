const dropdownSelect = document.querySelector(".dropdown-select");
const dropdownList = dropdownSelect.nextElementSibling;
const changeColorDropDownSelect = function (dropdownList) {
  if (dropdownList.classList.contains("dropdown--active")) {
    dropdownSelect.style.background = "#5f9ea0";
  } else {
    dropdownSelect.style.background = "#7fffd4";
  }
};
document.body.addEventListener("click", function () {
  dropdownList.classList.remove("dropdown--active");
  changeColorDropDownSelect(dropdownList);
});
dropdownSelect.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownList.classList.toggle("dropdown--active");
  changeColorDropDownSelect(dropdownList);
});
const dropItems = [...dropdownList.children];
dropItems[0].addEventListener("click", function () {
  console.log("new");
});
dropItems[1].addEventListener("click", function () {
  console.log("txt");
});
dropItems[2].addEventListener("click", function () {
  console.log("pfd");
});

const editorMain = document.querySelector(".editor-main");
editorMain.addEventListener("keydown", function (e) {
  console.log(e);
});

const editorFooter = document.querySelector(".editor-footer");
