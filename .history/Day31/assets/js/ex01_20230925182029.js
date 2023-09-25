document.addEventListener("DOMContentLoaded", function () {
  let lastTime;
  let timeStamp = 1000;
  let index = 0;
  function playAnimation(time) {
    index++;
    console.log(index);
    window.requestAnimationFrame(playAnimation);
  }
  window.requestAnimationFrame(playAnimation);
});
