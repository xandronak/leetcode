/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const SYMBOLS = {
    I: 1,
    IV: 4,
    IX: 9,
    V: 5,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const doubled = s[i] + s[i + 1];

    if (SYMBOLS[doubled]) {
      result += SYMBOLS[doubled];
      i++;
    } else {
      result += SYMBOLS[s[i]];
    }
  }

  return result;
};
