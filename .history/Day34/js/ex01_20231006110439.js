const imgContainer = document.querySelector(".img-container");
const imgResult = document.querySelector(".img-result");

//create img lens
const imgLens = document.createElement("div");
imgLens.classList.add("img-lens");
imgContainer.appendChild(imgLens);

//
let ratioW, ratioH;
ratioW = imgResult.offsetWidth / imgLens.offsetWidth;
