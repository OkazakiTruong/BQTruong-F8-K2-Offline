//exercise 01
const calculationTaxiFare = (distance) => {
  const DISTANCE_LT_1_KM = 15000;
  const DISTANCE_LT_5_KM = 13500;
  const DISTANCE_OVER_5_KM = 11000;
  const DISTANCE_OVER_120_KM = 0.1;
  //check distance
  if (distance <= 0 || typeof distance !== "number") {
    return "distance không hợp lệ";
  }
  //calculate taxi Fare
  let totalTaxiFare = 0;
  if (distance <= 1) {
    totalTaxiFare = distance * DISTANCE_LT_1_KM;
  } else if (distance <= 5) {
    totalTaxiFare = DISTANCE_LT_1_KM + (distance - 1) * DISTANCE_LT_5_KM;
  } else {
    totalTaxiFare =
      DISTANCE_LT_1_KM +
      4 * DISTANCE_LT_5_KM +
      (distance - 5) * DISTANCE_OVER_5_KM;
  }
  if (distance > 120) {
    totalTaxiFare -= totalTaxiFare * DISTANCE_OVER_120_KM;
  }
  return totalTaxiFare;
};

//Test case for exercise 01
let taxiFare;
console.log("test case for exercise 01");
//test case incorrect distance ==> return: "distance không hợp lệ"
taxiFare = calculationTaxiFare(-20);
console.log(taxiFare);
taxiFare = calculationTaxiFare("10");
console.log(taxiFare);
//test case correct distance
//under 1km
//(0.6km ==> taxiFare = 9000)
taxiFare = calculationTaxiFare(0.6);
console.log(taxiFare);
//(1km ==> taxiFare = 15000)
taxiFare = calculationTaxiFare(1);
console.log(taxiFare);
//less than or equal 5km;
//(2.5km ==> taxiFare = 35250)
taxiFare = calculationTaxiFare(2.5);
console.log(taxiFare);
//(5km ==> taxiFare = 69000)
taxiFare = calculationTaxiFare(5);
console.log(taxiFare);
//over 5km
//(7km ==> taxiFare = 91000)
taxiFare = calculationTaxiFare(7);
console.log(taxiFare);
//over 120km
//(122km ==> taxiFare = 1220400)
taxiFare = calculationTaxiFare(122);
console.log(taxiFare);

//exercise 02
const calculateElectricityBill = (numberKwh) => {
  const KWH_LT_50 = 1.678;
  const KWH_LT_100 = 1.734;
  const KWH_LT_200 = 2.014;
  const KWH_LT_300 = 2.536;
  const KWH_LT_400 = 2.834;
  const KWH_OVER_400 = 2.927;

  //check number kWh
  if (numberKwh < 0 || typeof numberKwh !== "number") {
    return "số điện không hợp lệ";
  }
  //calculate electricity bill
  let electricityBill = 0;
  if (numberKwh <= 50) {
    electricityBill = numberKwh * KWH_LT_50;
  } else if (numberKwh <= 100) {
    electricityBill = 50 * KWH_LT_50 + (numberKwh - 50) * KWH_LT_100;
  } else if (numberKwh <= 200) {
    electricityBill =
      50 * KWH_LT_50 + 50 * KWH_LT_100 + (numberKwh - 100) * KWH_LT_200;
  } else if (numberKwh <= 300) {
    electricityBill = 50 * KWH_LT_50 + 50 * KWH_LT_100 + 100 * KWH_LT_200;
    +(numberKwh - 200) * KWH_LT_300;
  } else if (numberKwh <= 400) {
    electricityBill = 50 * KWH_LT_50 + 50 * KWH_LT_100 + 100 * KWH_LT_200;
    +100 * KWH_LT_300 + (numberKwh - 300) * KWH_LT_400;
  } else {
    electricityBill = 50 * KWH_LT_50 + 50 * KWH_LT_100 + 100 * KWH_LT_200;
    +100 * KWH_LT_300 + 100 * KWH_LT_400 + (numberKwh - 400) * KWH_OVER_400;
  }
  return electricityBill;
};

//exercise 03
let n = 4;
const calculateExpressionValue = (n) => {
  if (n <= 0 || typeof n !== "number") {
    return "n không hợp lệ!!";
  }
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i * (i + 1);
  }
  return result;
};
//test case for exercise 03
let result;
//test case incorrect n ==> return n không hợp lệ!!
result = calculateExpressionValue("5");
console.log(result);
result = calculateExpressionValue(-1);
console.log(result);

//exercise 04
const checkPrimes = (number) => {
  if (number <= 1 || typeof number !== "number") {
    return "number không hợp lệ!!";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return number + " Không là số nguyên tố";
    }
  }
  return number + " là số nguyên tố";
};

console.log(checkPrimes(5));
console.log(checkPrimes(10));

//exercise 05

const drawTriangle = (n) => {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let number = "";
    for (let j = 1; j <= i; j++) {
      number += count;
      count++;
    }
    console.log(number);
  }
};
drawTriangle(5);
