/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher
 * the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher,
 * where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function
 * which takes a ROT13 encoded string as input and returns a decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 *
 * @param {String} str
 */
const rot13 = str => {
  return Array.from(str.toUpperCase())
    .map(char => {
      if (/[A-Z]/.test(char)) {
        return shift13(char);
      } else {
        return char;
      }
    })
    .join('');
};

const shift13 = char => {
  const min = 'A'.charCodeAt();
  const max = 'Z'.charCodeAt();
  let shift = char.charCodeAt() + 13;
  if (shift > max) {
    shift = min + (shift - 90) - 1;
  }

  return String.fromCharCode(shift);
};

const shift13mod = char => {
  return String.fromCharCode((char.charCodeAt() % 26) + 'A'.charCodeAt());
};

export { rot13, shift13mod };
