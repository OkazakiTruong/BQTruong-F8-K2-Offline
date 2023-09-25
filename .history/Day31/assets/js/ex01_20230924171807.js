document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("change");
  } else {
    console.log("in");
  }
});
let time = 30;
console.log(window);
