//exercise 01
const calculationTaxiFare = (distance) => {
  const DISTANCE_LT_1_KM = 15000;
  const DISTANCE_LT_5_KM = 13500;
  const DISTANCE_OVER_5_KM = 11000;
  const DISTANCE_OVER_120_KM = 0.1;
  //check distance
  if (distance === 0 || typeof distance !== "number") {
    return "distance không hợp lệ";
  }

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
    totalTaxiFare *= DISTANCE_OVER_120_KM;
  }
  return totalTaxiFare;
};

//Test case
let taxiFare = calculationTaxiFare(-20);
//incorrect distance
