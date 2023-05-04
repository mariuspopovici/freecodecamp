/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */
const searchInsert = (nums, target) => {
  let i = 0;
  while (nums[i] < target) {
    i++;
  }

  return i;
};

/**
 * Implemented with binary search O(log n).
 * @param {Array} nums
 * @param {Number} target
 * @returns
 */
const binSearchInsert = (nums, target) => {
  let [left, right] = [0, nums.length - 1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

console.log(searchInsert([], 5));
console.log(binSearchInsert([1, 2, 4, 7], 5));
