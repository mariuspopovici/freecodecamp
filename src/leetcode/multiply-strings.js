/**
 * Carry calculator. Applies *op* to num1 and num2
 * and returns ones digit and tens as carry
 *
 * @param {Number} num1
 * @param {Number} num2
 * @returns {sig, carry}
 */
const xcarry = (num1, num2, op) => {
  let [n1, n2] = [parseInt(num1), parseInt(num2)];
  let n1n2 = op(n1, n2);
  return {
    x: n1n2 % 10,
    carry: Math.floor(n1n2 / 10)
  };
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2, debug = false) => {
  let groups = [];
  let zeroes = '';

  if (num1 === num1.replace(/./g, '0') || num2 === num2.replace(/./g, '0')) {
    console.log('zero');
    return '0';
  }

  for (let i = num1.length - 1; i >= 0; i--) {
    let carry = 0;
    let group = '';
    for (let j = num2.length - 1; j >= 0; j--) {
      const prod = xcarry(num1[i], num2[j], (a, b) => a * b);
      let addCarry = xcarry(prod.x, carry, (a, b) => a + b);
      carry = prod.carry + addCarry.carry;
      if (debug) {
        console.log(`${num1[i]} * ${num2[j]} = ${addCarry.x} Carry ${carry}`);
      }
      group = addCarry.x + group;
    }

    let result = carry + group + zeroes;
    groups.push(result);
    zeroes += '0';
  }
  if (debug) {
    console.log(groups);
  }
  return groups.reduce((acc, val) => add(acc, val), '0').replace(/^0+/, '');
};

/**
 * Calculates num1 + num2 as string.
 *
 * @param {String} num1
 * @param {String} num2
 */
const add = (num1, num2, debug = false) => {
  [num1, num2] = num1.length < num2.length ? [num1, num2] : [num2, num1];
  let result = '';
  let carry = 0;
  let j = num2.length - 1;
  // for each digit of the smallest number, in reverse
  for (let i = num1.length - 1; i >= 0; i--) {
    let n1 = num1[i];
    let n2 = j >= 0 ? num2[j] : '0';
    const sum = xcarry(n1, n2, (a, b) => a + b);
    const addCarry = xcarry(sum.x, carry, (a, b) => a + b);
    if (debug) {
      console.log(`${n1} + ${n2} = ${addCarry.x} carry ${sum.carry}`);
    }
    result = addCarry.x + result;
    carry = sum.carry + addCarry.carry;
    j--;
  }

  // add remaining digits from the larger number + carry
  for (let i = j; i >= 0; i--) {
    let n1 = num2[i];
    let n2 = carry;
    const sum = xcarry(n1, n2, (a, b) => a + b);
    if (debug) {
      console.log(`${n1} + ${n2} = ${sum.x} carry ${sum.carry}`);
    }
    result = sum.x + result;
    carry = sum.carry;
  }

  if (carry) {
    result = carry + result;
  }

  return result;
};

console.log(multiply('0009', '1', false));

export { multiply };
