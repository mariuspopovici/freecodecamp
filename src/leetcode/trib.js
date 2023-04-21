/**
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 */
const tribonacci = n => {
  const solutions = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    solutions.push(solutions[i - 3] + solutions[i - 2] + solutions[i - 1]);
  }

  return solutions[n];
};

console.log(tribonacci(4));

export { tribonacci };
