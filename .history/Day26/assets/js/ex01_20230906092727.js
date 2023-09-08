const progressBar = document.querySelector(".progress-bar");
const progress = progressBar.querySelector(".progress");
const progressDot = progress.children[0];

//lấy chiều dài progress bar
const progressBarWidth = progressBar.clientWidth;
let progressBarDistance = -1;
const handleValue = function (value) {
  progressBar.style.width = `${value}%`;
};

progressBar.addEventListener("mousedown", function (e) {
  progressBarDistance = e.clientX - e.offsetX;
  if (e.which === 1) {
    let offsetX = e.clientX - progressBarDistance;
    let value = (offsetX * 100) / progressBarWidth;
    handleValue(value);
  }
});
