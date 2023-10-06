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

//img result
imgResult.style.backgroundImage = "url('" + img.src + "')";
imgResult.style.backgroundSize =
  img.width * ratioW + "px " + img.height * ratioH + "px";

//write function chang pos of lens
function moveImgLen(e) {
  e.preventDefault();
  imgLens.classList.add("active");
  imgResult.classList.add("active");

  let imgRect = img.getBoundingClientRect();
  let cursorX = e.clientX;
  let cursorY = e.clientY;
  let x = cursorX - imgRect.left;
  let y = cursorY - imgRect.top;

  x = x - imgLens.offsetWidth / 2;
  y = y - imgLens.offsetHeight / 2;

  if (x > img.width - imgLens.offsetWidth) {
    x = img.width - imgLens.offsetWidth;
  }
  if (x < 0) {
    x = 0;
  }
  if (y > img.height - imgLens.offsetHeight) {
    y = img.height - imgLens.offsetHeight;
  }
  if (y < 0) {
    y = 0;
  }
  imgLens.style.left = `${x}px`;
  imgLens.style.top = `${y}px`;
  imgResult.style.backgroundPosition =
    "-" + x * ratioW + "px -" + y * ratioH + "px";
}

img.addEventListener("mousemove", moveImgLen);
imgLens.addEventListener("mousemove", moveImgLen);
img.addEventListener("mouseout", function () {
  imgLens.classList.remove("active");
  imgResult.classList.remove("active");
  console.log("out");
});
