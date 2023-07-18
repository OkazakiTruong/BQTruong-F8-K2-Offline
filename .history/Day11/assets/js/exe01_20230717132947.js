let mainBlock = document.querySelector("main");

const openHeaderNav = () => {
  let isOpen = false;
  if (!isOpen) {
    mainBlock.style = "margin-top:340px";
    isOpen = true;
    console.log(flag);
  } else {
    mainBlock.style = "margin-top:0px";
    flag = false;
    console.log(flag);
  }
};
