let mainBlock = document.querySelector("main");
let isOpen = false;
const openHeaderNav = () => {
  if (!isOpen) {
    mainBlock.style = "margin-top:340px";
    isOpen = true;
  } else {
    mainBlock.style = "margin-top:0px";
    isOpen = false;
  }
};
