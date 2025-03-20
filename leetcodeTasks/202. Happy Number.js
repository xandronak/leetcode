/**
 * @param {number} n
 * @return {boolean}
 */

function sumOfSquaredDigits(value) {
  const formattedValue = value.toString();
  let result = 0;

  for (let i = 0; i < formattedValue.length; i++) {
      result += Math.pow(formattedValue[i], 2);
  }

  return result;
}

var isHappy = function(n) {
  let result = n;
  
  while(result < Number.MAX_SAFE_INTEGER && result > Number.MIN_SAFE_INTEGER) {
      const sum = sumOfSquaredDigits(result);

      if (sum === result) {
          break;
      }

      result = sum;
  }

  return result === 1;
};