import { describe } from 'riteway';
import { convertToRoman } from '../src/intermediate/roman-numeral-converter';

describe('convertToRoman()', async assert => {
  assert({
    given: '2',
    should: 'return II',
    actual: convertToRoman(2),
    expected: 'II'
  });

  assert({
    given: '3',
    should: 'return III',
    actual: convertToRoman(3),
    expected: 'III'
  });

  assert({
    given: '4',
    should: 'return IV',
    actual: convertToRoman(4),
    expected: 'IV'
  });

  assert({
    given: '12',
    should: 'return XII',
    actual: convertToRoman(12),
    expected: 'XII'
  });

  assert({
    given: '83',
    should: 'return LXXXIII',
    actual: convertToRoman(83),
    expected: 'LXXXIII'
  });

  assert({
    given: '798',
    should: 'return DCCXCVIII',
    actual: convertToRoman(798),
    expected: 'DCCXCVIII'
  });

  assert({
    given: '3999',
    should: 'return MMMCMXCIX',
    actual: convertToRoman(3999),
    expected: 'MMMCMXCIX'
  });
});
