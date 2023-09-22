const dropdownSelect = document.querySelector(".dropdown-select");
dropdownSelect.addEventListener("click", function () {
  const dropdownList = dropdownSelect.nextElementSibling;
  dropdownList.classList.toggle("dropdown--active");
  if (dropdownList.classList.contains("dropdown--active")) {
    console.log("true");
    dropdownSelect.style.background = "white";
  } else {
    console.log("false");
    dropdownSelect.style.background = "black";
  }
});
