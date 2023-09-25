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
  if (timer >= Math.floor(time)) {
    let frame = requestAnimationFrame(show);
    time = frame / 60;
    console.log(Math.floor(time));
  } else {
    console.log("End show");
  }
}
show();
