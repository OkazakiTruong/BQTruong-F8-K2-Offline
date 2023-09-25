document.addEventListener("DOMContentLoaded", function () {});

const mySetInterval = function (myFunction, timeStamp) {
  let frameLoop = Math.floor((timeStamp / 1000) * 60);
  let index = 0;
  function playAnimation(time) {
    index++;
    if (index >= frameLoop) {
      myFunction();
      index = 0;
    }
    window.requestAnimationFrame(playAnimation);
  }
  window.requestAnimationFrame(playAnimation);
};
