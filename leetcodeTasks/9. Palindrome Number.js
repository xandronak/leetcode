/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x === null || x === undefined) {
      return false;
  }

  const formattedValue = x.toString();

  if (formattedValue.length === 1) {
      return true;
  }

  let startPointer = 0;
  let endPointer = formattedValue.length - 1;

  while (startPointer <= endPointer) {
      if (formattedValue[startPointer] !== formattedValue[endPointer]) {
          return false;
      }

      startPointer += 1;
      endPointer -= 1;
  }

  return true;
};