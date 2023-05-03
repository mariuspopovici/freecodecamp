/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 */

const removeDuplicates = nums => {
  let insertAt = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertAt] = nums[i];
      insertAt++;
    }
  }
  return insertAt;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(nums);
const unique = removeDuplicates(nums);
console.log(nums);
console.log(unique);
