const dropdownSelect = document.querySelector(".dropdown-select");
dropdownSelect.addEventListener("click", function () {
  dropdownSelect.style.background = "cadetblue";
  const dropdownList = dropdownSelect.nextElementSibling;
  dropdownList.classList.toggle("dropdown--active");
});
