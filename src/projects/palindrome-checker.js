/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 *
 * @param {String} str
 */
const palindrome = str => {
  let clean = str.toLowerCase().replace(/[^a-zA-Z0-9]|\s/g, '');
  let result = true;
  for (let i = 0; result && i < clean.length / 2; i++) {
    // traverse to middle - compare each character with the opposing one
    // stop looping as soon as a mismatch is found
    result = clean[i] === clean[clean.length - i - 1];
  }

  return result;
};

export { palindrome };
