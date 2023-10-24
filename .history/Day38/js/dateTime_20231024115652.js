const dateTimeCustomer = document.querySelector(".custom-datetime");
const dateEl = dateTimeCustomer.querySelector(".time");
const daysEl = dateTimeCustomer.querySelector(".days");
const prevNextIcon = dateTimeCustomer.querySelectorAll(".icon i");

console.log(daysEl);
let getMonth = new Date().getMonth();
let getYear = new Date().getFullYear();
let getDate = new Date().getDate();

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalender = () => {
  let lastDateOfMonth = new Date(getYear, getMonth + 1, 0).getDate();
  let firstDayOfMonth = new Date(getYear, getMonth, 1).getDay();
  let lastDateOfLastMonth = new Date(getYear, getMonth, 0).getDate();
  let lastDayOfMonth = new Date(getYear, getMonth, lastDateOfMonth).getDay();
  console.log(lastDayOfMonth);
  console.log("day", firstDayOfMonth);
  let liTag = "";
  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class = in-active>${lastDateOfLastMonth--}</li>`;
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    if (i === getDate) {
      liTag += `<li class = "date--now">${i}</li>`;
    } else {
      liTag += `<li>${i}</li>`;
    }
  }
  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class = in-active>${i - lastDayOfMonth + 1}</li>`;
  }
  daysEl.innerHTML = liTag;
  dateEl.innerText = `${month[getMonth]} ${getYear}`;
};

prevNextIcon.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("prev")) {
      getMonth--;
      if (getMonth < 0) {
        getMonth = 11;
        getYear--;
      }
    }
    if (btn.classList.contains("next")) {
      getMonth++;
      if (getMonth > 11) {
        getMonth = 0;
        getYear++;
      }
    }
    renderCalender();
  });
});

renderCalender();
