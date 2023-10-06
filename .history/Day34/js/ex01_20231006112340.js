const imgContainer = document.querySelector(".img-container");
const img = document.querySelector(".img-container img");
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
  e.preventDefault();
  curPosL = e.offsetX;
  curPosT = e.offsetY;
  imgLens.style.left = `${curPosL}px`;
  imgLens.style.top = `${curPosT}px`;
}

imgContainer.addEventListener("mousemove", (e) => {
  movelens(e);
});
img.addEventListener("mousemove", (e) => {
  movelens(e);
});
