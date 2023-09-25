document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("change");
  } else {
    console.log("in");
  }
});
const time = 1000;
const number = document.querySelector(".number");
// number.innerText = time;
document.addEventListener("DOMContentLoaded", () => {
  window.requestAnimationFrame(function () {
    number.innerText = time;
    time--;
  });
});
