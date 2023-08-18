//exercise 01
// console.log("Hello world");

let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
let result = [];
arrA.forEach(function (item) {
  for (let index in arrB) {
    if (item === arrB[index]) {
      result.push(item);
    }
  }
});
console.log("Kết quả giao giữa hai mảng là: ", result);
