/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// bruteforce
var longestSubstring = function(s, k) {
  const result = [];

  const isSameSymbol = s.split('').every(val => s[0] === val);

  if (isSameSymbol) {
    if (s.length >= k) {
      return s.length;
    } else {
      return 0;
    }
  }

  function checkSubstring(substring) {
      const map = {};

      for (let i = 0; i < substring.length; i++) {
          const symbol = substring[i];
          
          if (map[symbol] !== undefined) {
              map[symbol] = map[symbol] + 1;
          } else {
              map[symbol] = 1;
          }
      }

      const values = Object.values(map);

      if (values.every(val => val >= k)) {
          return values.reduce((acc, val) => acc + val, 0);
      }

      return false;
  }

  for (let i = 0; i < s.length; i++) {
      for (let j = s.length; j > i; j--) {
          const substring = s.substring(i, j);
          const count = checkSubstring(substring);

          if (count) {
              result.push(count)
          }
      }
  }

  return result.length ? Math.max(...result) : 0;
};