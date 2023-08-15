let numArr = [5, 8, 1, 9, 6, 4];

const findMax = function (numArr) {
  let maxN = numArr.reduce(function (maxNum, currentNum) {
    return maxNum < currentNum ? currentNum : maxNum;
  }, numArr[0]);
  console.log(` số lớn nhất trong chuỗi là: ${maxN}`);
};

findMax(numArr);


const findMin(numArr){
    let minN = numArr.reduce(function (minNum, currentNum) {
        return minNum > currentNum ? currentNum : minNum;
      }, numArr[0]);
      console.log(` Số nhỏ nhất trong chuỗi là ${minN}`)
      
}