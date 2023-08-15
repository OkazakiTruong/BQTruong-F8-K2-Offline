//exercise 01
let numArr = [5, 8, 1, 9, 6, 4];

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

console.log("Số lớn nhất trong mảng trên là: ", findMax(numArr));
console.log("Số nhỏ nhất trong mảng trên là: ", findMin(numArr));

//exercise 02
