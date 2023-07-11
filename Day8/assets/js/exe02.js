let product = document.querySelectorAll(".product");
let headingCounter = document.querySelector(".heading>h2");
let minusBtn = document.querySelectorAll(".number-proc .minus");
let plusBtn = document.querySelectorAll(".number-proc .plus");
let numberProc = document.querySelectorAll(".number-proc>input");
let procTotal = document.querySelectorAll(".number-price .price .proc-total");
let procPrice = document.querySelectorAll(".number-price .price .proc-price")
let priceTotal = document.getElementById("js-total-price");

// count number product for header
const countingProc = () =>{
  let totalProc = 0;
  for(let i = 0; i<numberProc.length;i++){
    totalProc += Number(numberProc[i].value);
  }
  headingCounter.setAttribute("number-product", totalProc);
}
countingProc()
// calculate total price
const calculatePrice = () =>{
    let total = 0;
    for(let i=0; i<procPrice.length;i++){
        total += (Number(procPrice[i].innerText)*numberProc[i].value)  ; 
    }
    priceTotal.innerHTML = total
}
calculatePrice()


for (let i = 0; i < procTotal.length; i++) {
  procTotal[i].innerHTML = numberProc[i].value;
}
// when click minus button
for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].onclick = () => {
    if (numberProc[i].value > 1) {
      numberProc[i].value--;
      procTotal[i].innerHTML = numberProc[i].value;
      calculatePrice()
      countingProc()
    }
  };
}
// when click plus button
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].onclick = () => {
    numberProc[i].value++;
    procTotal[i].innerHTML = numberProc[i].value;
    calculatePrice()
    countingProc()
  };
}

