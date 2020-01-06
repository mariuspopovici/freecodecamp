import { describe } from 'riteway';
import { truthCheck } from '../src/intermediate/everything-be-true';

describe('truthCheck()', async assert => {
  assert({
    given:
      '[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"',
    should: 'return true',
    actual: truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy', sex: 'male' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' }
      ],
      'sex'
    ),
    expected: true
  });

  assert({
    given:
      '[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"',
    should: 'return false',
    actual: truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' }
      ],
      'sex'
    ),
    expected: false
  });

  assert({
    given:
      '[{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"',
    should: 'return false',
    actual: truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male', age: 0 },
        { user: 'Dipsy', sex: 'male', age: 3 },
        { user: 'Laa-Laa', sex: 'female', age: 5 },
        { user: 'Po', sex: 'female', age: 4 }
      ],
      'age'
    ),
    expected: false
  });

  assert({
    given:
      '[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"',
    should: 'return false',
    actual: truthCheck(
      [
        { name: 'Pete', onBoat: true },
        { name: 'Repeat', onBoat: true },
        { name: 'FastFoward', onBoat: null }
      ],
      'onBoat'
    ),
    expected: false
  });

  assert({
    given:
      '[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"',
    should: 'return true',
    actual: truthCheck(
      [
        { name: 'Pete', onBoat: true },
        { name: 'Repeat', onBoat: true, alias: 'Repete' },
        { name: 'FastFoward', onBoat: true }
      ],
      'onBoat'
    ),
    expected: true
  });

  assert({
    given: '[{"single": "yes"}], "single"',
    should: 'return true',
    actual: truthCheck([{ single: 'yes' }], 'single'),
    expected: true
  });

  assert({
    given: '[{"single": ""}, {"single": "double"}], "single"',
    should: 'return true',
    actual: truthCheck([{ single: '' }, { single: 'double' }], 'single'),
    expected: false
  });

  assert({
    given: '[{"single": "double"}, {"single": undefined}], "single"',
    should: 'return false',
    actual: truthCheck([{ single: 'double' }, { single: undefined }], 'single'),
    expected: false
  });

  assert({
    given: '[{"single": "double"}, {"single": NaN}], "single"',
    should: 'return false',
    actual: truthCheck([{ single: 'double' }, { single: NaN }], 'single'),
    expected: false
  });
});
