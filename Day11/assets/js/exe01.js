// open and close header nav
let isOpen = false;
const openHeaderNav = () => {
  let mainBlock = document.querySelector("main");
  if (!isOpen) {
    mainBlock.style = "margin-top:340px";
    isOpen = true;
  } else {
    mainBlock.style = "margin-top:0px";
    isOpen = false;
  }
};
