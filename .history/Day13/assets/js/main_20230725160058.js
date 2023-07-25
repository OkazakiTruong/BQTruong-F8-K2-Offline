const openLinkWrapper = () => {
  let linkWrapper = document.querySelector(".header .link-wrapper");
  let layOut = document.querySelector(".header .layout");
  linkWrapper.style = "display: flex";
};
const closeLinkWrapper = () => {
  let linkWrapper = document.querySelector(".header .link-wrapper");
  linkWrapper.style = "display: none";
};
