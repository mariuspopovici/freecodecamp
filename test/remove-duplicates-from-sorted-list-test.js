import { describe } from 'riteway';
import {
  deleteDuplicates,
  deleteAllDuplicates
} from '../src/leetcode/remove-duplicates-from-sorted-list';

import { listToArray, listFromArray } from '../src/leetcode/list';

const deleteTestCases = [
  {
    input: [1, 1],
    output: [1]
  },
  {
    input: [1, 2, 2, 3, 4, 5],
    output: [1, 2, 3, 4, 5]
  },
  {
    input: [1, 1, 2, 2, 3, 4],
    output: [1, 2, 3, 4]
  }
];

const deleteAllTestCases = [
  {
    input: [1, 1],
    output: []
  },
  {
    input: [1, 2, 2, 3, 4, 5],
    output: [1, 3, 4, 5]
  },
  {
    input: [1, 1, 2, 2, 3, 4],
    output: [3, 4]
  },
  {
    input: [1, 1, 2, 2, 3, 4, 4, 4],
    output: [3]
  }
];

describe('deleteDuplicates', async assert => {
  deleteTestCases.map(tc => {
    let input = listFromArray(tc.input);
    assert({
      given: listToArray(input),
      should: 'return ' + tc.output,
      actual: listToArray(deleteDuplicates(input)),
      expected: tc.output
    });
  });
});

describe('deleteAllDuplicates', async assert => {
  deleteAllTestCases.map(tc => {
    let input = listFromArray(tc.input);
    assert({
      given: listToArray(input),
      should: 'return ' + tc.output,
      actual: listToArray(deleteAllDuplicates(input)),
      expected: tc.output
    });
  });
});
