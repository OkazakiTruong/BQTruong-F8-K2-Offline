const openLinkWrapper = () => {
  let linkWrapper = document.querySelector(".header .link-wrapper");
  let layOut = document.querySelector(".header .layout");
  linkWrapper.style = "display: flex";
  layOut.style = "display: block";
};
const closeLinkWrapper = () => {
  let linkWrapper = document.querySelector(".header .link-wrapper");
  let layOut = document.querySelector(".header .layout");
  linkWrapper.style = "display: none";
  layOut.style = "display: none";
};
