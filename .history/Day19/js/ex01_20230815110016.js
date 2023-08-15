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

//Hàm kiểm tra có phải số nguyên tố hay không
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
//Hàm tính trung bình cộng số nguyên tố
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
// Cách 1:
let result = [];
let flag = true;
for (let i = 0; i < ex03Arr.length; i++) {
  for (let j = 0; j < result.length; j++) {
    if (ex03Arr[i] === result[j]) {
      flag = false;
      break;
    }
  }
  if (!flag) {
    flag = !flag;
    continue;
  }
  result.push(ex03Arr[i]);
}

//Cách 2:
// result = ex03Arr.filter(function (item, index) {
//   return ex03Arr.indexOf(item) === index;
// });

console.log(result);

//exercise 04;
let numbers = [5, 1, 9, 8, 10];
let element;
const sortUp = function (numArr, element) {
  console.log(element);
  if (typeof element !== "undefined") {
    numArr.push(element);
    return numArr.sort(function (a, b) {
      return a - b;
    });
  }
  return numArr.sort(function (a, b) {
    return a - b;
  });
};
console.log(sortUp(numbers, element));
