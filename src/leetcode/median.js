/**
 * Merge two sorted arrays.
 *
 * @param {Array} nums1
 * @param {Array} nums2
 * @returns The merged array.
 */
const merge = (nums1, nums2) => {
  let nums3 = [];
  let [i, j] = [0, 0];

  // loop through the smallest of the arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      nums3.push(nums1[i]);
      i++;
    } else {
      nums3.push(nums2[j]);
      j++;
    }
  }

  // add the missing elements of the array that hasn't been fully processed
  if (i < nums1.length) {
    // we have left over elements in the first array
    for (let k = i; k < nums1.length; k++) {
      nums3.push(nums1[k]);
    }
  } else {
    // we have left over elements in the second array
    for (let k = j; k < nums2.length; k++) {
      nums3.push(nums2[k]);
    }
  }

  return nums3;
};

/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const merged = merge(nums1, nums2);
  let median = 0;
  if (merged.length % 2 === 0) {
    median = (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2;
  } else {
    median = merged[Math.floor(merged.length / 2)];
  }

  return median;
};

export { findMedianSortedArrays };
