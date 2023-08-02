// Bài tập 1:
let a = 10;
let b = 20;
console.log("số a trước khi đảo là: ", a, ",số b trước khi đảo là: ", b);

a += b;
b = a - b;
a -= b;

console.log("số a sau khi đảo là: ", a, ",số b sau khi đảo là: ", b);

// Bài tập 2:

let s = 10 + 20 + 5 ** 10 / 2;
console.log("Giá trị của biểu thức = ", s);

// Bài tập 3:
let numA = 3;
let numB = 7;
let numC = 5;

let numMax = numA;
for (let i = 0; i < 3; i++) {
  if (numMax < numB) {
    numMax = numB;
  } else if (numMax < numC) {
    numMax = numC;
  }
}
