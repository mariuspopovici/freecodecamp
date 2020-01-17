/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 *  Integers in each row are sorted from left to right.
 *  The first integer of each row is greater than the last integer of the previous row.
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let found = false;
  for (let i = 0; i < matrix.length; i++) {
    // skip rows by comparing target to row ends
    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
      // found the row where the target could be located
      for (let j = 0; j < matrix[i].length / 2; j++) {
        // compare to row ends and advance towards the middle
        let left = matrix[i][j];
        let right = matrix[i][matrix[i].length - j - 1];
        if (target === left || target === right) {
          found = true;
          break;
        } else if (target < left || target > right) {
          // stop searching if target outside of [left, right]
          break;
        }
      }
      break;
    } else {
      continue;
    }
  }
  return found;
};

/**
 * Implemented using binary search.
 *
 * @param {Array} matrix
 * @param {Number} target
 */
const searchMatrixBS = (matrix, target) => {
  let found = false;
  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
      // found the row where the target could be located
      let left = 0;
      let right = matrix[i].length - 1;
      while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target > matrix[i][middle]) {
          left = middle + 1;
        } else if (target < matrix[i][middle]) {
          right = middle - 1;
        } else {
          found = true;
          break;
        }
      }
      break;
    } else {
      continue;
    }
  }
  return found;
};

console.log(
  searchMatrixBS(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ],
    34
  )
);

export { searchMatrix };
