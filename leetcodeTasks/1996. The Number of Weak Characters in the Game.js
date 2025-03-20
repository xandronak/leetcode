/**
 * @param {number[][]} properties
 * @return {number}
 */

var numberOfWeakCharacters = function(properties) {
  let result = 0;
  let maxDefence = 0;

  properties.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);

  for (let i = properties.length - 1; i >= 0; i--) {
      const current = properties[i];

      if (current[1] < maxDefence) {
          result += 1;
      }

      maxDefence = Math.max(maxDefence, current[1]);
  }

  return result;
};