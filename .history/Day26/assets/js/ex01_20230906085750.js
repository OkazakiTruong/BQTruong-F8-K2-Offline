const progressBar = document.querySelector(".progress-bar");
const progress = progressBar.querySelector(".progress");
const progressDot = progress.children[0];

progressBar.addEventListener("mousedown", function (e) {
  console.log("is mountdown");
});
