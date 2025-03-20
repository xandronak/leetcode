/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// built-in method
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};


// regex method
var strStr = function(haystack, needle) {
  const result = new RegExp(needle).exec(haystack);
  const index = result?.index ?? -1
  return index;
};
