const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const carouselNav = carousel.querySelector(".carousel-nav");
const nextBtn = carouselNav.querySelector(".next");
const prevBtn = carouselNav.querySelector(".prev");
const carouselNavRadio = carousel.querySelector(".carousel-nav-radio");

let firstOffesetX = 0;
let isMountDown = false;

// console.log(carouselInner.children);
const carouselItems = carouselInner.children;
const itemWidth = carouselInner.clientWidth;
Array.from(carouselItems).forEach(function (carouselItem) {
  carouselItem.style.width = `${itemWidth}px`;
  let html = document.createElement("div");
  html.classList.add("carousel-nav-item");
  carouselNavRadio.appendChild(html);
});

const listCarouselNavRadioItem = carouselNavRadio.children;
listCarouselNavRadioItem[0].classList.add("active");

const totalWidth = itemWidth * carouselItems.length;
carouselInner.style.width = `${totalWidth}px`;

let currentIndex = 0;

Array.from(listCarouselNavRadioItem).forEach((ele, index) => {
  ele.addEventListener("click", () => {
    changeActiveRadioItem(index);
  });
});

let changeActiveRadioItem = (currentIndexParam) => {
  currentIndex = currentIndexParam;

  Array.from(listCarouselNavRadioItem).forEach((ele, index) => {
    ele.classList.remove("active");
  });

  changePosition(currentIndexParam);

  listCarouselNavRadioItem[currentIndexParam].classList.add("active");
};

let changePosition = (currentIndexParam) => {
  carouselInner.style.translate = `${-(currentIndexParam * itemWidth)}px`;
};

nextBtn.addEventListener("click", changeNextItem);
const changeNextItem = function () {
  currentIndex++;

  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }

  changePosition(currentIndex);
  changeActiveRadioItem(currentIndex);
};
prevBtn.addEventListener("click", changePrevItem);
const changePrevItem = function () {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }

  changePosition(currentIndex);
  changeActiveRadioItem(currentIndex);
};

carouselInner.addEventListener("mousedown", function (e) {
  firstOffesetX = e.offsetX;
  isMountDown = true;
});
document.addEventListener("mouseup", function () {
  isMountDown = false;
});
carouselInner.addEventListener("mousemove", function (e) {
  if (isMountDown) {
    e.preventDefault();
    let changeOffset = e.offsetX - firstOffesetX;
    carouselInner.style.translate = `${changeOffset}px`;
    if (changeOffset / itemWidth <= 0.2) {
    }
  }
});
