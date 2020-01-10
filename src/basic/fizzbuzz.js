/**
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
 * For numbers which are multiples of both three and five print "FizzBuzz".
 */

/**
 * Classic FizzBuzz
 */
const fizbuzzClassic = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

/**
 * Functional :-) FizzBuzz
 * Takes a range (n) and a list of predicates. Applies each predicate to numbers from 1..n and
 * prints the result or number itself if predicates do not fire.
 *
 * @param {Number} n
 * @param {Array} predicates
 */

/**
 * Generates sequential numbers in the [1, n] range.
 * @param {Number} n # of elements to generate
 */
const genArray = n => Array.from({ length: n }, (_, i) => i + 1);

const fizzBuzzOnSteroids = (n = 100, predicates) => {
  genArray(n).forEach(number => {
    const out = predicates.reduce((result, fun) => result + fun(number), '');
    console.log(out === '' ? number : out);
  });
};

fizzBuzzOnSteroids(100, [
  n => (n % 3 === 0 ? 'Fizz' : ''),
  n => (n % 5 === 0 ? 'Buzz' : '')
]);

export { fizzBuzzOnSteroids as fizzBuzz, fizbuzzClassic };
