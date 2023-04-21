/**
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Constraints:
 *
 *   1 <= n <= 45
 **/
const climb = (n = 1) => {
  const solutions = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    solutions.push(solutions[i - 1] + solutions[i - 2]);
  }

  return solutions[n];
};

console.log(climb(45));

export { climb };
