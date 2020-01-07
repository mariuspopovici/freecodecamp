import { describe } from 'riteway';
import { rot13 } from '../src/projects/caesars-cipher';

describe('rot13()', async assert => {
  assert({
    given: 'SERR PBQR PNZC',
    should: 'return a all prime numbers less than 30',
    actual: rot13('SERR PBQR PNZC'),
    expected: 'FREE CODE CAMP'
  });

  assert({
    given: 'SERR CVMMN!',
    should: 'return a all prime numbers less than 30',
    actual: rot13('SERR CVMMN!'),
    expected: 'FREE PIZZA!'
  });

  assert({
    given: 'SERR YBIR?',
    should: 'return a all prime numbers less than 30',
    actual: rot13('SERR YBIR?'),
    expected: 'FREE LOVE?'
  });

  assert({
    given: 'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.',
    should: 'return a all prime numbers less than 30',
    actual: rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'),
    expected: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
  });
});
