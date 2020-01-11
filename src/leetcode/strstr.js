/**
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) {
    return 0;
  }

  let j = 0;
  let i = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      j++;
      i++;
    } else {
      if (j > 0) {
        i -= j - 1;
      } else {
        i++;
      }
      j = 0;
    }

    if (j === needle.length) {
      return i - needle.length;
    }
  }

  return -1;
};

export { strStr };
