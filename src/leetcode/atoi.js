/**
 * Implement atoi which converts a string to an integer. The function first discards
 * as many whitespace characters as necessary until the first non-whitespace character is found.
 * Then, starting from this character, takes an optional initial plus or minus
 * sign followed by as many numerical digits as possible, and interprets them as
 * a numerical value.The string can contain additional characters after those
 * that form the integral number, which are ignored and have no effect on the
 * behavior of this function. If the first sequence of non-whitespace characters
 * in str is not a valid integral number, or if no such sequence exists because
 * either str is empty or it contains only whitespace characters,
 * no conversion is performed. If no valid conversion could be performed, a zero
 * value is returned.
 *
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
  let index = 0;
  let sign = 1;
  let result = 0;
  const INT32_MIN = -Math.pow(2, 31);
  const INT32_MAX = Math.pow(2, 31) - 1;

  while (str[index] === ' ') {
    index++;
  }

  if (str[index] === '-' || str[index] === '+') {
    sign = str[index] === '-' ? -1 : 1;
    index++;
  }

  for (let i = index; i < str.length; i++) {
    if (/\d/g.test(str[i])) {
      result = result * 10 + str[i] * 1;
    } else {
      // stop after the first non digit
      break;
    }
  }

  result *= sign;

  if (result > INT32_MAX) {
    result = INT32_MAX;
  } else if (result < INT32_MIN) {
    result = INT32_MIN;
  }

  return result;
};

export { myAtoi };
