/**
 * You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.
 *
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = coordinates => {
  const [x, y] = coordinates;
  return (
    (even(letterToNumber(x)) && odd(y)) || (odd(letterToNumber(x)) && even(y))
  );
};

const letterToNumber = letter => letter.toLowerCase().charCodeAt(0) - 97 + 1;
const odd = n => n % 2 !== 0;
const even = n => n % 2 === 0;

console.log(squareIsWhite('b4'));
