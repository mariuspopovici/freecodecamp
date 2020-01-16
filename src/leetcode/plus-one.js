/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer. The digits
 * are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  let carry = true;
  let carryAmount = 1;
  for (let i = digits.length - 1; i >= 0 && carry; i--) {
    let sum = digits[i] + carryAmount;
    digits[i] = sum % 10;
    carryAmount = Math.floor(sum / 10);
    carry = carryAmount > 0;
  }

  if (carryAmount > 0) {
    digits = [carryAmount, ...digits];
  }

  return digits;
};

console.log(plusOne([9, 9]));
