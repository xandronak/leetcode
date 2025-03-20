/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
      return false;
  }
  
  let pointer = 0;
  
  while (pointer < sentence1.length) {
      const word1 = sentence1[pointer];
      const word2 = sentence2[pointer];
      
      const matchingPair = similarPairs.find((pair) => (
          (word1 === pair[0] && word2 === pair[1]) ||
          (word1 === pair[1] && word2 === pair[0])
      ));
      
      if (word1 !== word2 && !matchingPair) {
          return false;
      }
      
      pointer += 1;
  }
  
  return true;
};