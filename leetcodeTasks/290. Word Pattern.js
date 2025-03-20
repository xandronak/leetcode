/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const map = {};
  const formattedString = s.split(' ');

  if (pattern.length !== formattedString.length) return false;
  if (new Set(formattedString).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map[pattern[i]] && map[pattern[i]] !== formattedString[i]) {
      return false;
    }

    map[pattern[i]] = formattedString[i];
  }

  return true;
};
