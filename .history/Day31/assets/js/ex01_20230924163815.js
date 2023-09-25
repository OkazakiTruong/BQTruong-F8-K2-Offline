document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("change");
  } else {
    console.log("in");
  }
});
console.log(setInterval());
