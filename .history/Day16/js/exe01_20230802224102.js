// Bài tập 1:
let a = 10;
let b = 20;
console.log("số a trước khi đảo là: ", a, ",số b trước khi đảo là: ", b);

const swap = ($numberOne, $numberTwo) => {
  numberOne += numberTwo;
  numberTwo = numberOne - numberTwo;
  numberOne -= numberTwo;
};

swap(a, b);
console.log("số a sau khi đảo là: ", a, ",số b sau khi đảo là: ", b);
