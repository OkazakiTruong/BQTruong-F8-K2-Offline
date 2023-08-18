//exercise 01
let arrA = [1, 4, 3, 2, 1, 2];
let arrB = [5, 2, 6, 7, 1];
let result = [];
arrA.forEach(function (item) {
  for (let index in arrB) {
    if (item === arrB[index]) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }
});
console.log("Exercise 01");
console.log("Kết quả giao giữa hai mảng là: ", result);

//exercise 02
let arr = [0, 1, [2, 3], [[4, 12], 5, [6, 7]], [8, [9, 10, [11, 12]]]];

arr.map(function (item) {
  if (Array.isArray(item)) {
    arr = arr.flat();
  }
});

console.log("");
console.log("Exercise 02:");
console.log(arr);

//exercise 03
let arrEx03 = [
  ["a", 1, true],
  ["b", 2, false],
];

let resultEx03 = [];
arrEx03.flat().forEach(function (item) {});

// console.log(resultEx03);
