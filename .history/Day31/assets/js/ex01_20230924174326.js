// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     console.log("change");
//   } else {
//     console.log("in");
//   }
// });

let i = 1;
let timer = 30;
document.addEventListener("DOMContentLoaded", function () {});
requestAnimationFrame(function () {});

function show() 
  i++;
  let frame = requestAnimationFrame(show);
  let time = frame / 60;
  console.log(Math.floor(time));
}
show();
