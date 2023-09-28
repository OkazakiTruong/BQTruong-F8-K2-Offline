Window.prototype.mySetInterval = function (
  myFunction,
  timeStamp,
  timeToStop = null
) {
  let myPlay;
  let frameLoop = Math.floor((timeStamp / 1000) * 60);
  let frameStop;
  if (timeToStop !== null) {
    frameStop = Math.floor((timeToStop / 1000) * 60);
  }
  let index = 0;
  function play() {
    index++;
    if (!frameStop) {
      frameStop--;
    }
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
};

const timerContent = document.querySelector(".timer-content");
const getLinkBtn = timerContent.nextElementSibling;

timer = 30;
timerContent.innerText = timer;
const getLink = function () {
  timer--;
  if (timer <= 0) {
    timer = 0;
    getLinkBtn.classList.add("active");
    getLinkBtn.addEventListener("click", function () {
      window.location.href = "https://fullstack.edu.vn/";
    });
  }
  timerContent.innerText = timer;
};

document.addEventListener("DOMContentLoaded", function () {
  mySetInterval(getLink, 1000, timer * 1000);
});
