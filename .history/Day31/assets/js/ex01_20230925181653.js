document.addEventListener("DOMContentLoaded", function () {
  let lastTime;
  function playAnimation(time) {
    if (lastTime != null) {
      const delta = time - lastTime;
      console.log(delta);
    }
    lastTime = time;
    window.requestAnimationFrame(playAnimation);
  }
  window.requestAnimationFrame(playAnimation);
});
