const openLinkWrapper = () => {
  let linkWrapper = document.querySelector(".header .link-wrapper");
  let layOut = document.querySelector(".header .layout");
  linkWrapper.classList.add("link-wrapper-open");
  layOut.classList.add("layout-open");
};
const closeLinkWrapper = () => {
  let linkWrapper = document.querySelector(".header .link-wrapper");
  let layOut = document.querySelector(".header .layout");
  linkWrapper.classList.remove("link-wrapper-open");
  layOut.classList.remove("layout-open");
};
// const closeLinkWrapper = () => {
//   let linkWrapper = document.querySelector(".header .link-wrapper");
//   let layOut = document.querySelector(".header .layout");
//   linkWrapper.style = "display: none";
//   layOut.style = "display: none";
// };
