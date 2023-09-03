const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const carouselNav = carousel.querySelector(".carousel-nav");
const nextBtn = carouselNav.querySelector(".next");
const prevBtn = carouselNav.querySelector(".prev");

// console.log(carouselInner.children);
const carouselItems = carouselInner.children;
const itemWidth = carouselInner.clientWidth;
Array.from(carouselItems).forEach(function (carouselItem) {
  carouselItem.style.width = `${itemWidth}px`;
});

const totalWidth = itemWidth * carouselItems.length;
console.log(totalWidth);
carouselInner.style.width = `${totalWidth}px`;

let position = 0;
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
});

prevBtn.addEventListener("click", function () {
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
});
