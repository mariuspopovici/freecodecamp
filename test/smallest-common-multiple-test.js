import { describe } from 'riteway';
import { smallestCommons } from '../src/intermediate/smallest-common-multiple';

describe('smallestCommons()', async assert => {
  assert({
    given: '[1, 5]',
    should: 'return a number',
    actual: isNaN(smallestCommons([1, 5])),
    expected: false
  });

  assert({
    given: '[1, 5]',
    should: 'return 60',
    actual: smallestCommons([1, 5]),
    expected: 60
  });

  assert({
    given: '[2, 10]',
    should: 'return 2520',
    actual: smallestCommons([2, 10]),
    expected: 2520
  });

  assert({
    given: '[1, 13]',
    should: 'return 360360',
    actual: smallestCommons([1, 13]),
    expected: 360360
  });

  assert({
    given: '[23, 18]',
    should: 'return 6056820',
    actual: smallestCommons([23, 18]),
    expected: 6056820
  });
});
