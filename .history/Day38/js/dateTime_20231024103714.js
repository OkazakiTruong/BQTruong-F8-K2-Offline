const dateTimeCustomer = document.querySelector(".custom-datetime");
const date = dateTimeCustomer.querySelector(".time");
s;
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
  date.innerText = `${month[getMonth]} ${getYear}`;

  for (let i = 0; i < getLastDateOfMonth.length; i++) {}
};

renderCalender();
