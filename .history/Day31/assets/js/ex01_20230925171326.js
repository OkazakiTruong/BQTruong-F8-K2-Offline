// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     console.log("change");
//   } else {
//     console.log("in");
//   }
// });
const timerEle = document.querySelector(".timer");
let timer = 30;
let timeSpan = 1000;
document.addEventListener("DOMContentLoaded", function () {});
let time = 0;

function show() {
  if (Math.floor(time) <= 30) {
    let frame = requestAnimationFrame(show);
    // time = frame / 60;
    console.log(frame);

    timer--;
  } else {
    console.log("End show");
  }
}
show();