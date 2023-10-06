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
  //   if (x < 0) {
  //     x = 0;
  //   }
  if (y > img.height - imgLens.offsetHeight) {
    y = img.height - imgLens.offsetHeight;
  }
  //   if (y < 0) {
  //     y = 0;
  //   }

  console.log(x);
  imgLens.style.left = `${x}px`;
  imgLens.style.top = `${y}px`;
}

// imgContainer.addEventListener("mousemove", (e) => {
//   movelens(e);
// });
img.addEventListener("mousemove", (e) => {
  movelens(e);
});
imgLens.addEventListener("mousemove", (e) => {
  movelens(e);
});
