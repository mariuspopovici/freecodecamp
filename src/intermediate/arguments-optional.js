/**
 * Create a function that sums two arguments together. If only one argument is provided,
 * then return a function that expects one argument and returns the sum. For example, addTogether(2, 3)
 * should return 5, and addTogether(2) should return a function.
 *
 * Calling this returned function with a single argument will then return the sum:
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 *
 * If either argument isn't a valid number, return undefined.
 *
 * @param  {...any} args
 */

const addTogether = (...args) => {
  if (args.some(value => typeof value !== 'number')) {
    return;
  }

  if (args.length === 1) {
    return num => addTogether(args[0], num);
  } else {
    return args.reduce((acc, value) => acc + value);
  }
};

export { addTogether };
