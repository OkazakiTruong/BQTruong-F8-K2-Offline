const openMenu = () => {
  let screenW = Screen.width;
  let headerRight = document.querySelector(".header .header-right");
  let layoutCover = document.querySelector(".header .layout-cover");

  headerRight.style = "transform: translateX(0)";
  layoutCover.style = "transform: translateX(0)";
};
const closeMenu = () => {
  let headerRight = document.querySelector(".header .header-right");
  let layoutCover = document.querySelector(".header .layout-cover");

  headerRight.style = "transform: translateX(-100%)";
  layoutCover.style = "transform: translateX(-100%)";
};
