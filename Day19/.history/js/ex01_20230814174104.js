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
let numArrEx02 = [5, 8, 1, 9, 6, 4];

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
    return -1;
  } else {
    return (
      primeArr.reduce(function (prev, next) {
        prev += next;
        return prev;
      }, 0) / primeArr.length
    );
  }
};

let averagePrimes =
  calAveragePrimes(numArrEx02) === -1
    ? "Không có số nguyên tố"
    : "Trung bình cộng các số nguyên tố có trong mảng là: " +
      calAveragePrimes(numArrEx02);

console.log(averagePrimes);
