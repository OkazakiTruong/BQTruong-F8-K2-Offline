document.addEventListener("DOMContentLoaded", function () {
  let lastTime;
  let timeStamp = Math.floor((1000 / 1000) * 60);
  let index = 0;
  function playAnimation(time) {
    index++;
    if (index >= timeStamp) {
      console.log("hello");
      index = 0;
    }
    console.log(index);
    window.requestAnimationFrame(playAnimation);
  }
  window.requestAnimationFrame(playAnimation);
});
