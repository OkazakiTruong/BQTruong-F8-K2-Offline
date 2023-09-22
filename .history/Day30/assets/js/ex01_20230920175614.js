const dropdownSelect = document.querySelector(".dropdown-select");
dropdownSelect.addEventListener("click", function () {
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
  dropItems[1].addEventListener("click", function () {});
  dropItems[2].addEventListener("click", function () {});
});
