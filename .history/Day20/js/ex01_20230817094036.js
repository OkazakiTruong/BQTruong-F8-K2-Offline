//exercise 01
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
console.log("Exercise 01");
console.log("Kết quả giao giữa hai mảng là: ", result);

//exercise 02
let arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

arr = arr.join(" ").replaceAll(",", " ");
arr = arr.split(" ");
console.log(" ");
console.log("Exercise 02");
console.log(arr);

//exercise 03
let arrEx03 = [
  ["a", 1, true],
  ["b", 2, false],
];

arrEx03 = arrEx03.join(" ").replaceAll(",", " ");

console.log(arrEx03);
