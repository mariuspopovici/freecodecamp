/**
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 *
 * @param {String} str
 */
const bin2str = str =>
  str
    .split(' ')
    .map(binary => {
      return String.fromCharCode(parseInt(binary, 2));
    })
    .join('');

/**
 * Return binary string representing the passed English sentence.
 * The binary string will be space separated.
 *
 * @param {String} str
 */
const str2bin = str =>
  Array.from(str)
    .reduce(
      (acc, val) =>
        acc.concat(
          val
            .charCodeAt()
            .toString(2)
            .padStart(8, '0')
        ),
      []
    )
    .join(' ');

export { bin2str, str2bin };
