import { describe } from 'riteway';
import { addTogether } from '../src/intermediate/arguments-optional';

describe('addTogether()', async assert => {
  assert({
    given: '(2,3)',
    should: 'return 5',
    actual: addTogether(2, 3),
    expected: 5
  });

  assert({
    given: '(2)(3)',
    should: 'return 5',
    actual: addTogether(2)(3),
    expected: 5
  });

  assert({
    given: '(2, "3")',
    should: 'return undefined',
    actual: addTogether(2, '3'),
    expected: undefined
  });

  assert({
    given: '(2) ([3])',
    should: 'return undefined',
    actual: addTogether(2)([3]),
    expected: undefined
  });

  assert({
    given: '"http://bit.ly/IqT6zt"',
    should: 'return undefined',
    actual: addTogether('http://bit.ly/IqT6zt'),
    expected: undefined
  });
});
