/**
 * Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
 *
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * (The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. For example, sumFibs(10) should return 10 because all odd Fibonacci
 * numbers less than or equal to 10 are 1, 1, 3, and 5.
 *
 * @param {Number} num
 */

function sumFibs(num) {
  let fibs = [1, 1];
  let next = 0;

  // generate the Fibonacci sequence up to <num>
  // sequences is stored in reverse making it easier to get the last two
  // numbers without computing the length of the array on every iteration
  while ((next = fibs[0] + fibs[1]) <= num) {
    fibs.unshift(next);
  }

  return fibs
    .filter(val => val % 2 !== 0) // first we filter the odd numbers
    .reduce((acc, val) => (acc += val), 0); // then we sum them all up
}

console.log(sumFibs(10));
