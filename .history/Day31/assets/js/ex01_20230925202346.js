Window.prototype.mySetInterval = function (
  myFunction,
  timeStamp,
  timeToStop = null
) {
  let myPlay;
  let frameLoop = Math.floor((timeStamp / 1000) * 60);
  let frameStop = Math.floor((timeToStop / 1000) * 60);
  let index = 0;
  function play() {
    index++;
    frameStop--;
    console.log(frameStop);
    if (index >= frameLoop) {
      myFunction();
      index = 0;
    }
    myPlay = window.requestAnimationFrame(play);
    if (frameStop !== null && frameStop <= 0) {
      console.log(frameStop);
      cancelAnimationFrame(myPlay);
    }
  }
  myPlay = window.requestAnimationFrame(play);
  console.log(frameStop);
};

timer = 30;
mySetInterval(
  function () {
    console.log(timer--);
    if (timer <= 0) {
      console.log("get link");
    }
  },
  1000,
  30000
);
