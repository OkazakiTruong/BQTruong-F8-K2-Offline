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
let resultEx02 = [];
// arr = arr.join(" ").replaceAll(",", " ");
// arr = arr.split(" ");

// arr.forEach(function (item, index) {
//   console.log("item: ", item);
//   if (Array.isArray(item)) {
//     arr = arr.flat();
//     console.log(arr);
//   }
//   // console.log("item: ", item);
// });
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (Array.isArray(arr[i])) {
    arr = arr.flat();
  }
}

console.log(arr);
//exercise 03
let arrEx03 = [
  ["a", 1, true],
  ["b", 2, false],
];

let resultEx03 = [];
let stringArr = [];
let numberArr = [];
let boolArr = [];
for (let index in arrEx03) {
  arrEx03[index].forEach(function (item) {
    if (typeof item === "string") {
      stringArr.push(item);
    } else if (typeof item === "number") {
      numberArr.push(item);
    } else if (typeof item === "boolean") {
      boolArr.push(item);
    }
  });
}
resultEx03.push(stringArr);
resultEx03.push(numberArr);
resultEx03.push(boolArr);

// console.log(resultEx03);
