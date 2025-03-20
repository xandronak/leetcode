/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const stack = [];
  const map = {};
  const visited = new Set();

  for (let i = 0; i < s.length; i++) {
      if (!map[s[i]]) {
          map[s[i]] = 0;
      }

      map[s[i]] += 1;
  }

  for (let i = 0; i < s.length; i++) {
      map[s[i]] -= 1;

      if (visited.has(s[i])) {
          continue;
      }

      while (
          stack.length &&
          stack[stack.length - 1] > s[i] &&
          map[stack[stack.length - 1]] > 0
      ) {
          visited.delete(stack.pop());
      }

      visited.add(s[i]);
      stack.push(s[i]);
  }

  return stack.join("");
};