/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
  const map = {};
  const result = [];

  function getSortedWord(word) {
      return word.split('').sort().join('');
  }

  for (let word of strs) {
      const sortedWord = getSortedWord(word);
      
      if (map[sortedWord] !== undefined) {
          const index = map[sortedWord];

          result[index].push(word);
      } else {
          const index = result.length;

          map[sortedWord] = index;
          result.push([word]);
      }
  }

  return result;
};

// Time: O(n*k*log k)
// Space: O(n)


var groupAnagrams = function(strs) {
  const map = {};

  function getSortedWord(word) {
      return word.split('').sort().join('');
  }

  for (let word of strs) {
      const sortedWord = getSortedWord(word);
      
      if (map[sortedWord] !== undefined) {
          map[sortedWord].push(word);
      } else {
          map[sortedWord] = [word];
      }
  }

  return Object.values(map);
};

// Time: O(n*k*log k)
// Space: O(n)