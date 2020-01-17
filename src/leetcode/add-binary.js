/**
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * The binarry adder is implemented 1 bit full adders.
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  const [a1, b1] = a.length > b.length ? [a, b] : [b, a];

  let carry = '0';
  let result = '';

  for (let i = a1.length - 1; i >= 0; i--) {
    const x = a1[i];
    const bIndex = i - (a1.length - b1.length);
    const y = bIndex >= 0 ? b1[bIndex] : '0';
    const r = fullAdder(x, y, carry);
    result = r.sum + result;
    carry = r.carry;
  }

  return carry === '1' ? carry + result : result;
};

/**
 * Implements a 1 bit half adder.
 *
 * @param {String} a
 * @param {String} b
 */
const halfAdder = (a, b) => {
  return {
    sum: xor(a, b),
    carry: and(a, b)
  };
};

/**
 * Implements a 1 bit full adder.
 *
 * @param {String} a
 * @param {String} b
 * @param {String} carryIn
 * @returns {Object} with sum and carry out.
 */
const fullAdder = (a, b, carryIn) => {
  const ha1 = halfAdder(a, b);
  const ha2 = halfAdder(ha1.sum, carryIn);
  return {
    sum: ha2.sum,
    carry: or(ha1.carry, ha2.carry)
  };
};

const xor = (a, b) =>
  (a == '1' && b === '0') || (b === '1' && a === '0') ? '1' : '0';
const and = (a, b) => (a === '1' && b === '1' ? '1' : '0');
const or = (a, b) => (a === '1' || b === '1' ? '1' : '0');

console.log(addBinary('100', '110010'));

export { addBinary };
