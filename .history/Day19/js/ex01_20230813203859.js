let numArr = [5, 8, 1, 9, 6, 4];
numArr.reduce(function (maxNum, currentNum) {
  return maxNum < currentNum ? currentNum : maxNum;
}, numArr[0]);
const findMax = (numArr) => {};
