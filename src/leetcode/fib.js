/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 *
 * Given n, calculate F(n).
 */
const fib = n => {
  const solutions = [0, 1];
  for (let i = 2; i <= n; i++) {
    solutions.push(solutions[i - 1] + solutions[i - 2]);
  }

  return solutions[n];
};

/**
 * Recursive Fib.
 *
 * @param {Number} n
 * @returns nth Fibonacci number
 */
const fibr = n => {
  if (n <= 1) {
    return n;
  }

  return fibr(n - 1) + fibr(n - 2);
};

/**
 * Recursive Fib, short.
 * @param {Number} n
 * @returns nth Fibonnaci number
 */
const fibr2 = n => (n <= 1 ? n : fibr2(n - 1) + fibr2(n - 2));

console.log(fibr(35));
console.log(fibr(35));
console.log(fibr2(35));

export { fib, fibr, fibr2 };
