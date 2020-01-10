/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * @param {Number} number
 */
const isInt32 = number =>
  number > Math.pow(-2, 31) && number < Math.pow(2, 31) - 1;
const reverse = number => {
  let sign = 1;
  const result =
    parseInt(
      Array.from(number.toString())
        .reduce((acc, val) => {
          if (val === '-') {
            sign = -1;
          } else {
            acc.unshift(val);
          }

          return acc;
        }, [])
        .join('')
    ) * sign;

  return isInt32(result) ? result : 0;
};

console.log(reverse(1534236469));
