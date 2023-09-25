document.addEventListener("visibilitychange", function () {
  if ((document.visibilityState = "visible")) {
    console.log("in");
  } else {
    console.log("change");
  }
});
