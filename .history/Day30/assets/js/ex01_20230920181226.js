const dropdownSelect = document.querySelector(".dropdown-select");
dropdownSelect.addEventListener("click", function (e) {
  e.stopPropagation();
  document.body.addEventListener("click", function () {
    dropdownList.classList.remove("dropdown--active");
  });
  const dropdownList = dropdownSelect.nextElementSibling;
  dropdownList.classList.toggle("dropdown--active");
  if (dropdownList.classList.contains("dropdown--active")) {
    console.log("true");
    dropdownSelect.style.background = "#5f9ea0";
  } else {
    console.log("false");
    dropdownSelect.style.background = "#7fffd4";
  }
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
