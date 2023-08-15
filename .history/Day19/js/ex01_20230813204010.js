let numArr = [5, 8, 1, 9, 6, 4];

const findMax = (numArr) => {
  let maxN = numArr.reduce(function (maxNum, currentNum) {
    return maxNum < currentNum ? currentNum : maxNum;
  }, numArr[0]);
  console.log(` số lớn nhất trong chuỗi là: ${maxN}`);
};
