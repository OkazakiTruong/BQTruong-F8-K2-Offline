let mainBlock = document.querySelector("main");

const openHeaderNav = () => {
  let flag = false;
  if (!flag) {
    mainBlock.style = "margin-top:340px";
    flag = true;
    console.log(flag);
  } else {
    mainBlock.style = "margin-top:0";
    flag = false;
  }
};
