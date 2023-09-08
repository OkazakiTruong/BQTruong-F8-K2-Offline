const progressBar = document.querySelector(".progress-bar");
const progress = progressBar.querySelector(".progress");
const progressDot = progress.children[0];
const audio = document.querySelector(".audio");
const btnPlay = document.querySelector(".play-btn");
let runTime = progressBar.previousElementSibling;
let totalTime = progressBar.nextElementSibling;
let currentValue = 0;

const getSongTime = function (seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
    seconds < 10 ? `0${seconds}` : `${seconds}`
  }`;
};

//lấy chiều dài progress bar
const progressBarWidth = progressBar.clientWidth;
//Đặt cờ is Mount down
let isMountDown = false;
let progressBarDistance = 0;
const handleValue = function (value) {
  currentValue = value;
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  progress.style.width = `${value}%`;
};

const changeProgressWidth = function (e) {
  let offsetX = e.clientX - progressBarDistance;
  let value = (offsetX * 100) / progressBarWidth;
  handleValue(value);
};
progressBar.addEventListener("mousedown", function (e) {
  progressBarDistance = e.clientX - e.offsetX;
  if (e.which === 1) {
    changeProgressWidth(e);
    isMountDown = true;
  }
});
progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    if (progressBarDistance === 0) {
      progressBarDistance = e.clientX;
    }
    changeProgressWidth(e);
    isMountDown = true;
  }
});
document.addEventListener("mousemove", function (e) {
  if (isMountDown) {
    changeProgressWidth(e);
  }
});
progressBar.addEventListener("mousemove", function (e) {
  e.stopPropagation();
  if (isMountDown) {
    changeProgressWidth(e);
  }
});
document.addEventListener("mouseup", function () {
  isMountDown = false;
  // audio.currentTime = currentValue * audio.duration;
});

//wait audio load
audio.addEventListener("loadeddata", function (e) {
  totalTime.innerText = getSongTime(audio.duration);
});
audio.addEventListener("timeupdate", function () {
  runTime.innerText = getSongTime(audio.currentTime);
  value = (audio.currentTime * 100) / audio.duration;
  console.log(audio.currentTime);
  console.log(currentValue);
  console.log((currentValue * audio.duration) / 100);
  handleValue(value);
});

btnPlay.addEventListener("click", function (e) {
  if (audio.paused) {
    btnPlay.children[1].classList.add("active");
    btnPlay.children[0].classList.remove("active");
    audio.play();
  } else {
    btnPlay.children[1].classList.remove("active");
    btnPlay.children[0].classList.add("active");
    audio.pause();
  }
});
