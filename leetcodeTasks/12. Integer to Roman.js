const SYMBOLS = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

function getSymbol (value, base = 1) {
  if (value < base) return '';

  const firstDigit = +value.toString()[0];

  if (firstDigit < 4) return SYMBOLS[base].repeat(Math.floor(value / base));
  if (firstDigit > 5 && firstDigit < 9) return SYMBOLS[5 * base] + SYMBOLS[base].repeat(Math.floor((value - 5 * base) / base));
  if (firstDigit === 4 || firstDigit === 5 || firstDigit === 9) return SYMBOLS[firstDigit * base];
  return '';
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = '';

  result += SYMBOLS[1000].repeat(Math.floor(num / 1000));
  result += getSymbol(num % 1000, 100);
  result += getSymbol(num % 100, 10);
  result += getSymbol(num % 10, 1);

  return result;
};