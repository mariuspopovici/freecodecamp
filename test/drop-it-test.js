import { describe } from 'riteway';
import { dropElements } from '../src/intermediate/drop-it';

describe('dropElements()', async assert => {
  assert({
    given: '[1, 2, 3, 4] and n >= 3',
    should: 'return a [3, 4]',
    actual: dropElements([1, 2, 3, 4], function(n) {
      return n >= 3;
    }),
    expected: [3, 4]
  });

  assert({
    given: '[0, 1, 0, 1] and n === 1',
    should: 'return a [1, 0, 1]',
    actual: dropElements([0, 1, 0, 1], function(n) {
      return n === 1;
    }),
    expected: [1, 0, 1]
  });

  assert({
    given: '[1, 2, 3] and n > 0',
    should: 'return a [1, 2, 3]',
    actual: dropElements([1, 2, 3], function(n) {
      return n > 0;
    }),
    expected: [1, 2, 3]
  });

  assert({
    given: '[1, 2, 3, 4] and n > 5',
    should: 'return an empty array',
    actual: dropElements([1, 2, 3, 4], function(n) {
      return n > 5;
    }),
    expected: []
  });

  assert({
    given: '[1, 2, 3, 7, 4] and n > 3',
    should: 'return [7, 4]',
    actual: dropElements([1, 2, 3, 7, 4], function(n) {
      return n > 3;
    }),
    expected: [7, 4]
  });

  assert({
    given: '[1, 2, 3, 9, 2] and n > 2',
    should: 'return [3, 9, 2]',
    actual: dropElements([1, 2, 3, 9, 2], function(n) {
      return n > 2;
    }),
    expected: [3, 9, 2]
  });
});
