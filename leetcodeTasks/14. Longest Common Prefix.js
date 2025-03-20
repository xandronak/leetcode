/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
      for (let j = 0; j < prefix.length; j++) {
          if (strs[i][j] !== prefix[j]) {
              prefix = prefix.substring(0, j);
          }
      }
  }

  return prefix;
};

// O(n*m)