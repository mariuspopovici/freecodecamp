import { describe } from 'riteway';
import { steamrollArray } from '../src/intermediate/steamroller';

describe('steamrollArray()', async assert => {
  assert({
    given: '[[["a"]], [["b"]]]',
    should: 'return ["a", "b"]',
    actual: steamrollArray([[['a']], [['b']]]),
    expected: ['a', 'b']
  });

  assert({
    given: '[1, [2], [3, [[4]]]]',
    should: 'return [1, 2, 3, 4]',
    actual: steamrollArray([1, [2], [3, [[4]]]]),
    expected: [1, 2, 3, 4]
  });

  assert({
    given: '[1, {}, [3, [[4]]]]',
    should: 'return [1, {}, 3, 4]',
    actual: steamrollArray([1, {}, [3, [[4]]]]),
    expected: [1, {}, 3, 4]
  });
});
