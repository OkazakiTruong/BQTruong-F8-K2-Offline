const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const carouselNav = carousel.querySelector(".carousel-nav");
const nextBtn = carouselNav.querySelector(".next");
const prevBtn = carouselNav.querySelector(".prev");

const carouselItems = carouselInner.children;
const itemWidth = carouselInner.clientWidth;

console.log(itemWidth);
Array.from(carouselItems).forEach((item) => {
  item.style.width = `${itemWidth}px`;
});

const totalWidth = itemWidth * carouselItems.length;
carouselInner.style.width = `${totalWidth}px`;

let currentPosition = 0;

nextBtn.addEventListener("click", function () {
  if (currentPosition <= carouselItems.length - 2) {
    currentPosition++;
    carouselInner.style.translate = `-${currentPosition * itemWidth}px`;
  }
});

prevBtn.addEventListener("click", function () {
  if (currentPosition > 0) {
    currentPosition--;
    carouselInner.style.translate = `-${currentPosition * itemWidth}px`;
  }
});
