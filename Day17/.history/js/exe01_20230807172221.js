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
