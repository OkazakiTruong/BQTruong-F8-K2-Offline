let mainBlock = document.querySelector("main");

const openHeaderNav = () => {
  let isopen = false;
  if (!flag) {
    mainBlock.style = "margin-top:340px";
    flag = false;
    console.log(flag);
  } else {
    mainBlock.style = "margin-top:0px";
    flag = false;
    console.log(flag);
  }
};
