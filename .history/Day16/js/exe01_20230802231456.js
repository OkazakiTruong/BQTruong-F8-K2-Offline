// Bài tập 1:
const exercise01 = () => {
  console.log("Bài tập số 1: ");
  let a = 10;
  let b = 20;
  console.log("số a trước khi đảo là: ", a, ",số b trước khi đảo là: ", b);

  a += b;
  b = a - b;
  a -= b;

  console.log("số a sau khi đảo là: ", a, ",số b sau khi đảo là: ", b);
};
exercise01();
console.log("");
// Bài tập 2:
const exercise02 = () => {
  console.log("Bài tập số 2: ");
  let s = 10 + 20 + 5 ** 10 / 2;
  console.log("Giá trị của biểu thức = ", s);
};
exercise02();
console.log("");
// Bài tập 3:
const exercise03 = () => {
  console.log("Bài tập số 3: ");
  const a = 3;
  const b = 7;
  const c = 9;

  let numMax = a;
  for (let i = 0; i < 3; i++) {
    if (numMax < b) {
      numMax = b;
    }
    if (numMax < c) {
      numMax = c;
    }
  }
  console.log(` số lớn nhất trong ba số ${a}, ${b} và ${c} là: ${numMax}`);
};
exercise03();
console.log("");
// Bài tập số 4:

const exercise04 = () => {
  console.log("Bài tập số 4: ");
  const a = -1;
  const b = 4;
  let product = a * b;
  if (product < 0) {
    console.log("Hai số khác dấu");
  } else if (product > 0) {
    console.log("Hai số cùng dấu");
  } else {
    console.log("Một trong hai số bằng 0");
  }
};
exercise04();
console.log("");
// Bài tập số 5:
const exercise05 = () => {
  console.log("Bài tập số 5: ");
  let nA = 3;
  let nB = 8;
  let nC = 10;
};
