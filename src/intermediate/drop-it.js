/**
 * Intermediate Algorithm Scripting: Drop it
 *
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index)
 * until the function func returns true when the iterated element is passed through it.
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 *
 * @param {Array} arr
 * @param {Function} func
 */
const dropElements = (arr, func) => {
  let result = [];
  for (const [index, element] of arr.entries()) {
    if (func(element)) {
      result = arr.slice(index);
      break;
    }
  }

  return result;
};

/**
 * Alternate implementation using slice and no for loop.
 * @param {Array} arr
 * @param {Function} func
 */
const dropElements2 = (arr, func) => {
  // slice the array beginning with the first index that passes the predicate otherwise
  // slice from the length of the array which return an empty array.
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
};

export { dropElements2 as dropElements };
