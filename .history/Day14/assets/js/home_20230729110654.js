const openMenu = () => {
  let headerRight = document.querySelector(".header .header-right");
  let layoutCover = document.querySelector(".header .layout-cover");

  headerRight.classList.add("js-open-menu");
  layoutCover.classList.add("js-open-menu");
  headerRight.classList.remove("js-close-menu");
  layoutCover.classList.remove("js-close-menu");
};
const closeMenu = () => {
  let headerRight = document.querySelector(".header .header-right");
  let layoutCover = document.querySelector(".header .layout-cover");

  headerRight.classList.add("js-close-menu");
  layoutCover.classList.add("js-close-menu");
  headerRight.classList.remove("js-open-menu");
  layoutCover.classList.remove("js-open-menu");
};
