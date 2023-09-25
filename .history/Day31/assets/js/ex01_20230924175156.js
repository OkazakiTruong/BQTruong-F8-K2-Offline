// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     console.log("change");
//   } else {
//     console.log("in");
//   }
// });
const timerEle = document.querySelector(".timer");
let timer = 30;
document.addEventListener("DOMContentLoaded", function () {});
requestAnimationFrame(function () {});
let time = 0;

function show() {
  if (Math.floor(time) <= 30) {
    let frame = requestAnimationFrame(show);
    time = frame / 60 - 30;
    console.log(Math.floor(time));

    timer--;
  } else {
    console.log("End show");
  }
}
show();
