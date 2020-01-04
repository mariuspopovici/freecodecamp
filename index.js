import { dropElements } from './src/intermediate/drop-it';

console.log(
  dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
  })
);
