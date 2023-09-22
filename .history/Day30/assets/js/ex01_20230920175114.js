const dropdownSelect = document.querySelector(".dropdown-select");
dropdownSelect.addEventListener("click", function () {
  const dropdownList = dropdownSelect.nextElementSibling;
  dropdownList.classList.toggle("dropdown--active");
  if (dropdownList.classList.contains("dropdown--active")) {
    dropdownSelect.style.background = "cadeblue";
  } else {
    dropdownSelect.style.background = "initial";
  }
});
