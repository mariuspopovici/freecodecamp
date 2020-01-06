import { describe } from 'riteway';
import { Person } from '../src/intermediate/make-a-person';

describe('Person', async assert => {
  var bob = new Person('Bob Ross');

  assert({
    given: 'Object.keys(bob).length',
    should: 'return 6',
    actual: Object.keys(bob).length,
    expected: 6
  });

  assert({
    given: '',
    should: 'be instance of Person',
    actual: bob instanceof Person,
    expected: true
  });

  assert({
    given: 'bob.firstName',
    should: 'be undefined',
    actual: bob.firstName,
    expected: undefined
  });

  assert({
    given: 'bob.lastName',
    should: 'be undefined',
    actual: bob.lastName,
    expected: undefined
  });

  assert({
    given: 'bob.getLastName()',
    should: 'be Ross',
    actual: bob.getLastName(),
    expected: 'Ross'
  });

  assert({
    given: 'bob.getFirstName()',
    should: 'be Bob',
    actual: bob.getFirstName(),
    expected: 'Bob'
  });

  assert({
    given: 'bob.getFullName()',
    should: 'be Bob Ross',
    actual: bob.getFullName(),
    expected: 'Bob Ross'
  });

  bob.setFirstName('Haskell');

  assert({
    given: 'bob.getFullName()',
    should: 'be Haskell Ross',
    actual: bob.getFullName(),
    expected: 'Haskell Ross'
  });

  bob.setLastName('Curry');

  assert({
    given: 'bob.getFullName()',
    should: 'be Haskell Curry',
    actual: bob.getFullName(),
    expected: 'Haskell Curry'
  });

  bob.setFullName('Haskell Curry');

  assert({
    given: 'bob.getFullName()',
    should: 'be Haskell Curry',
    actual: bob.getFullName(),
    expected: 'Haskell Curry'
  });

  assert({
    given: 'bob.getLastName()',
    should: 'be Curry',
    actual: bob.getLastName(),
    expected: 'Curry'
  });

  assert({
    given: 'bob.getFirstName()',
    should: 'be Haskell',
    actual: bob.getFirstName(),
    expected: 'Haskell'
  });
});
