const numerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/**
 * Given a roman numeral, convert it to integer.
 *
 * @param {String} s a roman numeral
 * @returns the integer representation of the specified roman numeral.
 */
const romanToInt = s =>
  Array.from(s).reduce((acc, symbol, index) => {
    let value = numerals[symbol];
    if (value < numerals[s[index + 1]]) {
      acc -= value;
    } else {
      acc += value;
    }
    return acc;
  }, 0);

console.log(romanToInt('MCMXCIV'));

export { romanToInt };
