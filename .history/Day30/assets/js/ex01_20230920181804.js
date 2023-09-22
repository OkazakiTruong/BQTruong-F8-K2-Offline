const dropdownSelect = document.querySelector(".dropdown-select");
const changeColorDropDownSelect = function (dropdownList) {
  if (dropdownList.classList.contains("dropdown--active")) {
    console.log("true");
    dropdownSelect.style.background = "#5f9ea0";
  } else {
    console.log("false");
    dropdownSelect.style.background = "#7fffd4";
  }
};

dropdownSelect.addEventListener("click", function (e) {
  e.stopPropagation();
  const dropdownList = dropdownSelect.nextElementSibling;
  document.body.addEventListener("click", function () {
    dropdownList.classList.remove("dropdown--active");
    changeColorDropDownSelect(dropdownList);
  });
  dropdownList.classList.toggle("dropdown--active");
  changeColorDropDownSelect(dropdownList);
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
});
