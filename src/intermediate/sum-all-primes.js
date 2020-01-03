/**
 * Intermediate Algorithm Scripting: Sum All Primes
 *
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
 * For example, 2 is a prime number because it is only divisible by 1 and 2.
 * In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 * Rewrite sumPrimes so it returns the *sum of all prime numbers* that are less than or equal to num.
 *
 * @param {Number} num
 */
function sumPrimes(num) {
  return genPrimes(num).reduce((acc, val) => acc + val);
}

/**
 * Generates all prime numbers up to limit specified in *num*.
 * Implements the Sieve of Eratosthenes [algorithm](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
 * @param {Number} num
 */
function genPrimes(num) {
  let sieve = [];
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (!sieve[i]) {
      // if it's not in the sieve yet, it must be a prime number
      primes.push(i);
      // mark all multiples of current number in the sieve
      for (let n = 2; n * i <= num; n++) {
        sieve[n * i] = true;
      }
    }
  }

  return primes;
}

export { sumPrimes, genPrimes };
