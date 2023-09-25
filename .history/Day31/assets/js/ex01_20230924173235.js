// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     console.log("change");
//   } else {
//     console.log("in");
//   }
// });

let i = 1;
document.addEventListener("DOMContentLoaded", function () {});
requestAnimationFrame(function () {
  console.log(i);
  i++;
});
