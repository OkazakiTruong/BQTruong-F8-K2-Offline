const showDisplay = (value) => {
  let display = document.getElementById("calculator-display");
  display.value += value;
};

const resetDisplay = () =>{
  let display = document.getElementById("calculator-display");
  display.value = ""
}

const showResult = () =>{
  let display = document.getElementById("calculator-display");
  let result = eval(display.value.replace(/x/g,'*'))
  display.value = result
}