const progressBar = document.querySelector(".progress-bar");
const progress = progressBar.querySelector(".progress");
const progressDot = progress.children[0];

//lấy chiều dài progress bar
const progressBarWidth = progressBar.clientWidth;
const progressBarDistance = -1;

progressBar.addEventListener("mousedown", function (e) {
  progressBarDistance = e.clientX - e.offsetX;
  console.log(progressBarDistance);
  console.log(e.offsetX);
});
