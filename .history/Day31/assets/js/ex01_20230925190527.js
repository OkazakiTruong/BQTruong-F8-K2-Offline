Window.prototype.mySetInterval = function (
  myFunction,
  timeStamp,
  timeToStop = null
) {
  let frameLoop = Math.floor((timeStamp / 1000) * 60);
  let index = 0;
  function play() {
    index++;
    if (index >= frameLoop) {
      myFunction();
      index = 0;
    }
    let myPlay = window.requestAnimationFrame(play);
    if ((timeToStop !== null) & (timeToStop === 0)) {
      cancelAnimationFrame(play);
    }
  }
  window.requestAnimationFrame(play);
};

timer = 30;
mySetInterval(
  function () {
    console.log(timer--);
  },
  1000,
  timer
);
