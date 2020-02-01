/**
 * Given a triangle, find the minimum path sum from top to bottom.
 * Each step you may move to adjacent numbers on the row below.
 * For example, given the following triangle
 * [
 *      [2],
 *     [3,4],
 *    [6,5,7],
 *   [4,1,8,3]
 * ]
 *
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 * @param {Array} triangle
 */
const minimumTotal = triangle => {
  // Start at the second to last row, then add the smallest element under the current element.
  // Propagate the minimum sum of current element and adjacent numbers from the lower layer
  // to the next layer. Eventually the top element of the triangle will have the minimum sum.
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
};

export { minimumTotal };

const triangle = [[-1], [2, 3], [1, -1, -3]];

console.log(minimumTotal(triangle));
