import { describe } from 'riteway';
import { telephoneCheck } from '../src/projects/telephone-number-validator';

describe('telephoneCheck()', async assert => {
  assert({
    given: '555-555-5555',
    should: 'return a boolean',
    actual: typeof telephoneCheck('555-555-5555'),
    expected: 'boolean'
  });

  assert({
    given: '1 555-555-5555',
    should: 'return true',
    actual: telephoneCheck('1 555-555-5555'),
    expected: true
  });

  assert({
    given: '1 (555) 555-5555',
    should: 'return true',
    actual: telephoneCheck('1 (555) 555-5555'),
    expected: true
  });

  assert({
    given: '5555555555',
    should: 'return true',
    actual: telephoneCheck('5555555555'),
    expected: true
  });

  assert({
    given: '555-555-5555',
    should: 'return true',
    actual: telephoneCheck('555-555-5555'),
    expected: true
  });

  assert({
    given: '(555)555-5555',
    should: 'return true',
    actual: telephoneCheck('(555)555-5555'),
    expected: true
  });

  assert({
    given: '1(555)555-5555',
    should: 'return true',
    actual: telephoneCheck('1(555)555-5555'),
    expected: true
  });

  assert({
    given: '555-5555',
    should: 'return false',
    actual: telephoneCheck('555-5555'),
    expected: false
  });

  assert({
    given: '5555555',
    should: 'return false',
    actual: telephoneCheck('5555555'),
    expected: false
  });

  assert({
    given: '1 555)555-5555',
    should: 'return false',
    actual: telephoneCheck('1 555)555-5555'),
    expected: false
  });

  assert({
    given: '1 555 555 5555',
    should: 'return true',
    actual: telephoneCheck('1 555 555 5555'),
    expected: true
  });

  assert({
    given: '1 456 789 4444',
    should: 'return true',
    actual: telephoneCheck('1 456 789 4444'),
    expected: true
  });

  assert({
    given: '123**&!!asdf#',
    should: 'return false',
    actual: telephoneCheck('123**&!!asdf#'),
    expected: false
  });

  assert({
    given: '55555555',
    should: 'return false',
    actual: telephoneCheck('55555555'),
    expected: false
  });

  assert({
    given: '(6054756961)',
    should: 'return false',
    actual: telephoneCheck('(6054756961)'),
    expected: false
  });

  assert({
    given: '(555-555-5555',
    should: 'return false',
    actual: telephoneCheck('(555-555-5555'),
    expected: false
  });

  assert({
    given: '(555)5(55?)-5555',
    should: 'return false',
    actual: telephoneCheck('(555)5(55?)-5555'),
    expected: false
  });
});
