//exercise 01
// console.log("Hello world");

let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];

let result = [];
result = arrA.map(function (item) {
  for (let index in arrB) {
    if (item === arrB[index]) {
      console.log(item);
      return item;
    }
  }
});
console.log(result);
