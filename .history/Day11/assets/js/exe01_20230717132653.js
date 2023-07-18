let mainBlock = document.querySelector("main");

const openHeaderNav = () => {
  let flag = false;
  if (!flag) {
    mainBlock.style = "margin-top:340px";
    console.log(flag);
  } else {
    mainBlock.style = "margin-top:0px";
    flag = false;
  }
};
