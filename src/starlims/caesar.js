const makeAlphabet = (minChar, maxChar) => ({
  minChar,
  maxChar,
  min: minChar.charCodeAt(),
  max: maxChar.charCodeAt(),
  length: maxChar.charCodeAt() - minChar.charCodeAt() + 1
});

const transform = (str, transformation) =>
  Array.from(str.toUpperCase())
    .map(char => transformation(char))
    .join('');

const makeAZShift = places => char =>
  shift(char, places, makeAlphabet('A', 'Z'));

const shift = (char, places, alphabet) => {
  if (!RegExp(`[${alphabet.minChar}-${alphabet.maxChar}]`).test(char))
    return char;
  let newcode = char.charCodeAt() + (places % alphabet.length);
  return String.fromCharCode(
    newcode > alphabet.max
      ? alphabet.min + (newcode - alphabet.max) - 1
      : newcode < alphabet.min
      ? alphabet.max - (alphabet.min - newcode) + 1
      : newcode
  );
};

const makeShiftTransform = str => places => transform(str, makeAZShift(places));

const encrypt = (str, key) => makeShiftTransform(str)(key);
const decrypt = (str, key) => encrypt(str, -key);

const message =
  'ZAWN WHH  PDA NZ PAWI EO WJJKQJYEJC SEPD CNAWP LHAWOQNA PDA NAHAWOA KB OPWNHEIO PAYDJKHKCU LHWPBKNI R PSAHRA ZKP VANK   PDWJG UKQ BKN WHH UKQN OQLLKNP   AJFKU PDA JAS RANOEKJ';
const key = 256;

console.log(decrypt(message, key));
