const imgContainer = document.querySelector(".img-container");
const imgResult = document.querySelector(".img-result");

//create img lens
const imgLens = document.createElement("div");
imgLens.classList.add("img-lens");
imgContainer.appendChild(imgLens);

//calculate ratio between imgResult and Lens
let ratioW, ratioH;
ratioW = imgResult.offsetWidth / imgLens.offsetWidth;
ratioH = imgResult.offsetHeight / imgLens.offsetHeight;

//write function chang pos of lens
function movelens(e) {
  curPosL = e.offsetX;
  curPosT = e.offsetY;
}

imgContainer.addEventListener("mousemove", (e) => {
  console.log("move");
});
