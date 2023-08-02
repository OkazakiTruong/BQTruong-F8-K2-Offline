// Bài tập 1:
console.log("Bài tập số 1: ");
let a = 10;
let b = 20;
console.log("số a trước khi đảo là: ", a, ",số b trước khi đảo là: ", b);

a += b;
b = a - b;
a -= b;

console.log("số a sau khi đảo là: ", a, ",số b sau khi đảo là: ", b);
console.log("");
// Bài tập 2:
console.log("Bài tập số 2: ");
let s = 10 + 20 + 5 ** 10 / 2;
console.log("Giá trị của biểu thức = ", s);
console.log("");
// Bài tập 3:
console.log("Bài tập số 3: ");
const numA = 3;
const numB = 7;
const numC = 9;

let numMax = numA;
for (let i = 0; i < 3; i++) {
  if (numMax < numB) {
    numMax = numB;
  }
  if (numMax < numC) {
    numMax = numC;
  }
}
console.log(
  ` số lớn nhất trong ba số ${numA}, ${numB} và ${numC} là: ${numMax}`
);
console.log("");
// Bài tập số 4:
console.log("Bài tập số 4: ");
const numberA = 0;
const numberB = 4;
if (numberA * numberB < 0) {
  console.log("Hai số khác dấu");
} else if (numberA * numberB > 0) {
  console.log("Hai số cùng dấu");
} else {
  console.log("Một trong hai số bằng 0");
}

// Bài tập số 5:
console.log("Bài tập số 5: ");
let nA = 3;
let nB = 8;
let nC = 10;
