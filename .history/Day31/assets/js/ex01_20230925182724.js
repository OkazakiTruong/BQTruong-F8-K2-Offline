document.addEventListener("DOMContentLoaded", function () {});

const mySetInterval = function (myFunction, timeStamp) {
  let timeStamp = Math.floor((500 / 1000) * 60);
  let index = 0;
  function playAnimation(time) {
    index++;
    if (index >= timeStamp) {
      myFunction();
      index = 0;
    }
    window.requestAnimationFrame(playAnimation);
  }
  window.requestAnimationFrame(playAnimation);
};
