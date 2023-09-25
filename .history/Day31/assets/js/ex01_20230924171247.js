document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("change");
  } else {
    console.log("in");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  window.requestAnimationFrame(function () {
    console.log("Hello world");
  });
});
