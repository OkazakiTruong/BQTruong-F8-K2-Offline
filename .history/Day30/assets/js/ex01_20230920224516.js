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

const editorFooter = document.querySelector(".editor-footer");
let numberKey = editorFooter.querySelector(".number-keys");
let numberWords = editorFooter.querySelector(".number-words");

const editorMain = document.querySelector(".editor-main");
let x = editorMain.contentEditable;
console.log(x.property);
editorMain.addEventListener("keyup", function (e) {
  const editorText = editorMain.innerText;
  const numKey = editorText.trim().replace(" ", "").length;
  const numWord = editorText.trim().split(" ").length;

  numberKey.innerText = numKey;
  numberWords.innerText = numWord;
});
editorMain.addEventListener("mousedown", function (e) {
  console.log("Bạn đã bôi đen nội dung này");
  console.log(e);
});
