// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     console.log("change");
//   } else {
//     console.log("in");
//   }
// });

let timer = 30;
document.addEventListener("DOMContentLoaded", function () {});
requestAnimationFrame(function () {});

function show() {
  let time = 0;
  if (Math.floor(time) <= 30) {
    let frame = requestAnimationFrame(show);
    time = frame / 60;
  } else {
    console.log("End show");
  }
}
show();
