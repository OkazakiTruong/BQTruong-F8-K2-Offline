const dropdownSelect = document.querySelector(".dropdown-select");
dropdownSelect.addEventListener("click", function () {
  const dropdownList = dropdownSelect.nextElementSibling();
  console.log(dropdownList);
});
