/**
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 *
 * @param {Number} num
 */
const convertToRoman = num => {
  // create lookup values for each numeral in thousands, hundreds, tens and ones
  const m = ['', 'M', 'MM', 'MMM'];
  const c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const x = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const i = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  // break num into thousands, hundreds, tens and ones and lookup each numeral
  const thousands = m[Math.floor(num / 1000)];
  const hundreds = c[Math.floor((num % 1000) / 100)];
  const tens = x[Math.floor((num % 100) / 10)];
  const ones = i[num % 10];

  return `${thousands}${hundreds}${tens}${ones}`;
};

export { convertToRoman };
