const dateTimeCustomer = document.querySelector(".custom-datetime");
const dateEl = dateTimeCustomer.querySelector(".time");
const daysEl = dateTimeCustomer.querySelector(".days");
let getMonth = new Date().getMonth();
let getYear = new Date().getFullYear();

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
  let getLastDateOfMonth = new Date(getYear, getMonth + 1, 0).getDate();
  let liTag = "";
  for (let i = 1; i <= getLastDateOfMonth.length; i++) {
    liTag += `<li>${i}</li>`;
  }

  daysEl.innerHTML = liTag;
  dateEl.innerText = `${month[getMonth]} ${getYear}`;
};

renderCalender();
