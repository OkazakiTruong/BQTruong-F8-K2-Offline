//exercise 01
let numArrEx01 = [5, 8, 1, 9, 6, 4];

const findMax = (numArr) => {
  return numArr.reduce(function (maxNum, currentNum) {
    return maxNum < currentNum ? currentNum : maxNum;
  }, numArr[0]);
};

const findMin = (numArr) => {
  return numArr.reduce(function (minNum, currentNum) {
    return minNum > currentNum ? currentNum : minNum;
  }, numArr[0]);
};

console.log("Số lớn nhất trong mảng trên là: ", findMax(numArrEx01));
console.log("Số nhỏ nhất trong mảng trên là: ", findMin(numArrEx01));

//exercise 02
let numArrEx02 = [8, 1, 9, 6, 4];
let numArrEx02TesCase02 = [5, 8, 1, 9, 6, 4, 7];

const isPrime = function (number) {
  if (number <= 1 || typeof number !== "number") {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const calAveragePrimes = function (numArr) {
  let primeArr = numArr.filter(function (num) {
    return isPrime(num);
  });
  if (primeArr.length === 0) {
    return "Mảng không có số nguyên tố";
  } else {
    return (
      "Trung bình cộng các số nguyên tố có trong mảng là: " +
      primeArr.reduce(function (prev, next) {
        prev += next;
        return prev;
      }, 0) /
        primeArr.length
    );
  }
};

//Test case 01: trong mảng không có số nguyên tố
console.log(calAveragePrimes(numArrEx02));
//Test case 02: trong mảng có số nguyên tố
console.log(calAveragePrimes(numArrEx02TesCase02));

//exercise03
let ex03Arr = ["xin", "chao", "xin", "hello", "world", "world", "xin"];
let result = [];
let flag = true;
ex03Arr.forEach(function (item) {
  for (let i = 0; i < result.length; i++) {
    if (item === result[i]) {
      continue;
    }
  }
  result.push(item);
  console.log(result);
});

console.log(result);
// let indexArr = [];
// for (let i = 0; i < ex03Arr.length - 1; i++) {
//   for (let j = i + 1; j < ex03Arr.length; j++) {
//     if (ex03Arr[i] === ex03Arr[j]) {
//       ex03Arr[j] = "";
//     }
//   }
// }
// ex03Arr = ex03Arr.filter(function (item) {
//   if (item === "") {
//     return false;
//   }
//   return true;
// });
// console.log("Mảng sau khi chuẩn hóa là", ex03Arr);
