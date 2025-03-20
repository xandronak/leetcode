// Using Stack

const brackets = {
  ')': '(',
  '}': '{',
  ']': '['
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (let bracket of s) {
    const isCloseBracket = !!brackets[bracket];

    if (!stack.length && isCloseBracket) return false;
    if (isCloseBracket && stack[stack.length - 1] !== brackets[bracket]) return false;


    if (isCloseBracket) {
      stack.pop(bracket);
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
};