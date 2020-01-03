import { describe } from 'riteway';
import { sumPrimes, genPrimes } from '../src/intermediate/sum-all-primes';

describe('genPrimes()', async assert => {
  assert({
    given: '30',
    should: 'return a all prime numbers less than 30',
    actual: genPrimes(30),
    expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  });
});

describe('sumPrimes()', async assert => {
  assert({
    given: '10',
    should: 'return a number',
    actual: isNaN(sumPrimes(10)),
    expected: false
  });

  assert({
    given: '10',
    should: 'return 17',
    actual: sumPrimes(10),
    expected: 17
  });

  assert({
    given: '977',
    should: 'return 73156',
    actual: sumPrimes(977),
    expected: 73156
  });
});
