/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */

function getMiddleWord(words) {
  if (words.length === 1) {
      return words[0];
  }

  const word = words[Math.ceil(words.length / 2)];

  return word;
}

function findWordsWithMinMatches(word, words, matchesCount) {
  return words.filter((value) => {
      let count = 0;

      for (let i = 0; i < word.length; i++) {
          if (word[i] === value[i]) {
              count += 1;
          }
      }

      return matchesCount === 0 ? count === matchesCount : count >= matchesCount;
  });
}

var findSecretWord = function(words, master) {
  if (!words || words.length === 0) {
      return;
  }

  let filteredValues = [...words];

  while (filteredValues.length) {
      const word = getMiddleWord(filteredValues);
      const matchesCount = master.guess(word);

      filteredValues = filteredValues.filter((value) => value !== word);

      if (matchesCount === 6) {
          return word;
      }

      filteredValues = findWordsWithMinMatches(word, filteredValues, matchesCount);
  }
};