const dateTimeCustomer = document.querySelector(".custom-datetime");
const date = dateTimeCustomer.querySelector(".time");

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
  date.innerText = `{${month[getMonth]} ${getYear}}`;
};

renderCalender();
