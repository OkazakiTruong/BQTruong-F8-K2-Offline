Window.prototype.mySetInterval = function (myFunction, timeStamp) {
  let myPlay;
  let frameLoop = Math.floor((timeStamp / 1000) * 60);
  let index = 0;
  function play() {
    index++;
    if (index >= frameLoop) {
      myFunction();
      index = 0;
    }
    myPlay = window.requestAnimationFrame(play);
  }
  myPlay = window.requestAnimationFrame(play);
  return myPlay;
};
Window.prototype.myCancelSetInterval = function (mySetIntervalId) {
  this.window.cancelAnimationFrame(mySetIntervalId);
};
console.log(mySetInterval);
const timerContent = document.querySelector(".timer-content");
const getLinkBtn = timerContent.nextElementSibling;

timer = 30;
timerContent.innerText = timer;
const getLink = document.addEventListener("DOMContentLoaded", function () {
  let mySetIntervalId = mySetInterval(
    function () {
      timer--;
      if (timer <= 0) {
        timer = 0;
        myCancelSetInterval(mySetIntervalId);
        getLinkBtn.classList.add("active");
        getLinkBtn.addEventListener("click", function () {
          window.location.href = "https://fullstack.edu.vn/";
        });
      }
      timerContent.innerText = timer;
    },
    1000,
    timer * 1000
  );
});
