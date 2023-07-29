const openMenu = () => {
  let headerRight = document.querySelector(".header .header-right");
  let layoutCover = document.querySelector(".header .layout-cover");

  headerRight.classList.add("js-open-menu");
  layoutCover.classList.add("js-open-menu");
};
const closeMenu = () => {
  let headerRight = document.querySelector(".header .header-right");
  let layoutCover = document.querySelector(".header .layout-cover");

  headerRight.classList.add("js-close-menu");
  layoutCover.classList.add("js-close-menu");
};
