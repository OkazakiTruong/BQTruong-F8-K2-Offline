const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const carouselNav = carousel.querySelector(".carousel-nav");
const nextBtn = carouselNav.querySelector(".next");
const prevBtn = carouselNav.querySelector(".prev");

// console.log(carouselInner.children);
let carouselItems = carouselInner.children;
const itemWidth = carouselInner.clientWidth;
carouselItems.forEach((carouselItem) => {
  carouselItem.style.width = itemWidth;
});
