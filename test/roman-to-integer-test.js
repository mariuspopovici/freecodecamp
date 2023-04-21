import { describe } from 'riteway';
import { romanToInt } from '../src/projects/roman-to-integer.js';

describe('telephoneCheck()', async assert => {
  assert({
    given: 'III',
    should: 'return 3',
    actual: romanToInt('III'),
    expected: 3
  });
});
