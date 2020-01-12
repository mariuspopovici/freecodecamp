import { describe } from 'riteway';
import { multiply } from '../src/leetcode/multiply-strings';

describe('dropElements()', async assert => {
  assert({
    given: '123456789 and 987654321',
    should: 'return 121932631112635269',
    actual: multiply('123456789', '987654321'),
    expected: '121932631112635269'
  });

  assert({
    given: '0 and 0',
    should: 'return 0',
    actual: multiply('0', '0'),
    expected: '0'
  });

  assert({
    given: '1 and 0',
    should: 'return 0',
    actual: multiply('1', '0'),
    expected: '0'
  });

  assert({
    given: '0 and 1',
    should: 'return 0',
    actual: multiply('0', '1'),
    expected: '0'
  });

  assert({
    given: '00009 and 1',
    should: 'return 9',
    actual: multiply('00009', '1'),
    expected: '9'
  });

  assert({
    given: '9 and 000001',
    should: 'return 9',
    actual: multiply('9', '000001'),
    expected: '9'
  });

  assert({
    given: '9133 and 0',
    should: 'return 0',
    actual: multiply('9133', '0'),
    expected: '0'
  });

  assert({
    given: '408 and 5',
    should: 'return 2040',
    actual: multiply('408', '5'),
    expected: '2040'
  });
});
