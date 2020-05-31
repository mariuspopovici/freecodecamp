const MorseCodes = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.'
};

let morseMsg = [
  184,
  14,
  226,
  227,
  138,
  162,
  59,
  139,
  142,
  40,
  235,
  162,
  139,
  142,

  128,
  187,
  139,
  138,
  128,
  168,
  238,
  224,
  46,
  43,
  162,
  232,
  184,
  163,

  168,
  14,
  238,
  43,
  160,
  58,
  35,
  186,
  46,
  56,
  162,
  174,
  32,
  58,
  43,

  142,
  227,
  170,
  34,
  232,
  168,
  14,
  42,
  139,
  142,
  2,
  168,
  128,
  168,

  227,
  187,
  139,
  186,
  46,
  232,
  142,
  160,
  46,
  56,
  14,
  142,
  238,
  56,

  170,
  40,
  232,
  238,
  128,
  227,
  187,
  128,
  184,
  171,
  142,
  238,

  40,
  234,
  3,
  138,
  162,
  59,
  128
];

const decode = msg =>
  msg
    // make binary
    .map(byte => byte.toString(2).padStart(8, '0'))
    .join('')
    // split in words
    .split('0000000')
    // split in letters, convert each letter to morse code and lookup alphabet letter
    .map(word => word.split('000').map(letter => lookup(fromBinary(letter))))
    // join letters into words
    .map(word => word.join(''))
    // join all words into a sentence
    .join(' ');

const fromBinary = letter =>
  letter
    .replace(/111/g, '-')
    .replace(/1/g, '.')
    .replace(/0/g, '');

const lookup = morseLetter =>
  Object.keys(MorseCodes).find(key => MorseCodes[key] === morseLetter);

//console.log(lookup('.-'));

//console.log(fromBinary('1110111'));

console.log(decode(morseMsg));
