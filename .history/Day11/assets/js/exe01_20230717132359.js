let mainBlock = document.querySelector("main");

console.log(mainBlock.style.marginTop.value);

const openHeaderNav = () => {
  let flag = false;
  if (!flag) {
    mainBlock.style = "margin-top:340px";
    flag = true;
  } else {
    mainBlock.style = "margin-top:0";
  }
};
