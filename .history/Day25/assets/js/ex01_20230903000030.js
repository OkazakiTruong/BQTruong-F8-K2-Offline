const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const carouselNav = carousel.querySelector(".carousel-nav");
const nextBtn = carouselNav.querySelector(".next");
const prevBtn = carouselNav.querySelector(".prev");
const carouselNavRadio = carousel.querySelector(".carousel-nav-radio");

const carouselItems = carouselInner.children;
const itemWidth = carouselInner.clientWidth;

console.log(itemWidth);
Array.from(carouselItems).forEach((item) => {
  item.style.width = `${itemWidth}px`;
  let radioItem = document.createElement("div");
  radioItem.classList.add("radio-item");
  carouselNavRadio.appendChild(radioItem);
});
carouselNavRadio.children[0].classList.add("active");

const totalWidth = itemWidth * carouselItems.length;
carouselInner.style.width = `${totalWidth}px`;

let currentPosition = 0;

const changePosition = function () {
  carouselInner.style.translate = `-${currentPosition * itemWidth}px`;
};
nextBtn.addEventListener("click", function () {
  if (currentPosition <= carouselItems.length - 2) {
    currentPosition++;
    changePosition();
  }
});

prevBtn.addEventListener("click", function () {
  if (currentPosition > 0) {
    currentPosition--;
    changePosition();
  }
});

const changeRadioCarousel = function (ele, position) {
  currentPosition = position;
  Array.from(carouselNavRadio.children).forEach((ele) => {
    ele.classList.remove("active");
  });
  ele.classList.add("active");
  changePosition();
};
Array.from(carouselNavRadio.children).forEach((ele, index) => {
  ele.addEventListener("click", function () {
    changeRadioCarousel(ele, index);
  });
});
