// Bài tập 1:
let a = 10;
let b = 20;
console.log("số a trước khi đảo là: ", a, ",số b trước khi đảo là: ", b);

const swap = (numberOne, numberTwo) => {
  numberOne += numberTwo;
  console.log("n1", numberOne);
  numberTwo = numberOne - numberTwo;
  console.log("n2", numberTwo);
  numberOne -= numberTwo;
  console.log("n1", numberOne);
};

swap(a, b);
console.log("số a sau khi đảo là: ", a, ",số b sau khi đảo là: ", b);
