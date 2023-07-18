let mainBlock = document.querySelector("main");

const openHeaderNav = () => {
  let isOpen = false;
  if (!isOpen) {
    mainBlock.style = "margin-top:340px";
    isOpen = true;
  } else {
    mainBlock.style = "margin-top:0px";
    isOpen = false;
  }
};
