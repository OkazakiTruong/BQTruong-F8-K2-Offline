// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     console.log("change");
//   } else {
//     console.log("in");
//   }
// });

let i = 1;
let interval = 1000;
document.addEventListener("DOMContentLoaded", function () {});
requestAnimationFrame(function () {});

function show() {
  //   console.log(i);
  i++;
  let frame = requestAnimationFrame(show);
  let time = frame / 60;
  console.log(time);
}
show();
