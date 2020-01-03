import { describe } from 'riteway';
import { sumFibs } from '../src/intermediate/sum-all-odd-fibonacci-numbers.js';

describe('sum()', async assert => {
  assert({
    given: '1',
    should: 'return a number',
    actual: isNaN(sumFibs(1)),
    expected: false
  });

  assert({
    given: '1000',
    should: 'return 1785',
    actual: sumFibs(1000),
    expected: 1785
  });

  assert({
    given: '4000000',
    should: 'return 4613732',
    actual: sumFibs(4000000),
    expected: 4613732
  });

  assert({
    given: '4',
    should: 'return a 5',
    actual: sumFibs(4),
    expected: 5
  });

  assert({
    given: '75025',
    should: 'return 135721',
    actual: sumFibs(75025),
    expected: 135721
  });

  assert({
    given: '75024',
    should: 'return 60696',
    actual: sumFibs(75024),
    expected: 60696
  });
});
