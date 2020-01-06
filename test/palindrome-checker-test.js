import { describe } from 'riteway';
import { palindrome } from '../src//projects/palindrome-checker';

describe('palindrome', async assert => {
  assert({
    given: 'eye',
    should: 'return a boolean',
    actual: typeof palindrome('eye'),
    expected: 'boolean'
  });

  assert({
    given: 'eye',
    should: 'return true',
    actual: palindrome('eye'),
    expected: true
  });

  assert({
    given: '_eye',
    should: 'return true',
    actual: palindrome('_eye'),
    expected: true
  });

  assert({
    given: 'race car',
    should: 'return true',
    actual: palindrome('race car'),
    expected: true
  });

  assert({
    given: 'not a palindrome',
    should: 'return false',
    actual: palindrome('not a palindrome'),
    expected: false
  });

  assert({
    given: 'A man, a plan, a canal. Panama',
    should: 'return true',
    actual: palindrome('A man, a plan, a canal. Panama'),
    expected: true
  });

  assert({
    given: 'never odd or even',
    should: 'return true',
    actual: palindrome('never odd or even'),
    expected: true
  });

  assert({
    given: 'nope',
    should: 'return false',
    actual: palindrome('nope'),
    expected: false
  });

  assert({
    given: 'My age is 0, 0 si ega ym.',
    should: 'return true',
    actual: palindrome('My age is 0, 0 si ega ym.'),
    expected: true
  });

  assert({
    given: '1 eye for of 1 eye.',
    should: 'return false',
    actual: palindrome('1 eye for of 1 eye.'),
    expected: false
  });
});
