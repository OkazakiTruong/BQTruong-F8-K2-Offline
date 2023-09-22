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

editorMain.addEventListener("keyup", function (e) {
  const editorText = editorMain.innerText;
  const numKey = editorText.trim().replace(" ", "").length;
  const numWord =
    editorText.trim().split(" ")[0] === ""
      ? 0
      : editorText.trim().split(" ").length;
  numberKey.innerText = numKey;
  numberWords.innerText = numWord;
});

const boldOption = document.querySelector(".bold-option");
boldOption.addEventListener("click", function () {
  if (window.getSelection().toString() !== "") {
    let startAnchor = window.getSelection().anchorOffset;
    let endAnchor = window.getSelection().focusOffset;
    if (startAnchor > endAnchor) {
      let temp = startAnchor;
      startAnchor = endAnchor;
      endAnchor = temp;
    }
  }
  console.log();
});
