document.addEventListener("DOMContentLoaded", function () {
  function playAnimation(time) {
    console.log(time);
    // 3108.748
    window.requestAnimationFrame(playAnimation);
  }
  window.requestAnimationFrame(playAnimation);
});
