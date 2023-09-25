document.addEventListener("DOMContentLoaded", function () {
  let lastTime;
  let timeStamp = Math.floor((1000 / 1000) * 60);
  let index = 0;
  function playAnimation(time) {
    index++;
    console.log(index);
    window.requestAnimationFrame(playAnimation);
  }
  window.requestAnimationFrame(playAnimation);
});
