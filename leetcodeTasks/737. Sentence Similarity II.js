/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */

function traverse(words, dictionary, results) {
  if (!words) {
      return;
  }
  
  for (const word of words) {
      if (!results.has(word)) {
          results.add(word);
          traverse(dictionary[word], dictionary, results);
      }
  }
}
  
function buildDictionary(pairs) {
  const dictionary = {};
  
  for (const pair of pairs) {
      const [word1, word2] = pair;
      
      if (!dictionary[word1]) {
          dictionary[word1] = [];
      }
      
      dictionary[word1].push(word2);
      
      if (!dictionary[word2]) {
          dictionary[word2] = [];
      }
      
      dictionary[word2].push(word1);
  }
  
  return dictionary;
}

var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
      return false;
  }
  
  const dictionary = buildDictionary(similarPairs);
  let pointer = 0;
  
  while (pointer < sentence1.length) {
      const word1 = sentence1[pointer];
      const word2 = sentence2[pointer];
      
      const pairs = new Set();
      traverse(dictionary[word1], dictionary, pairs);
      
      if (word1 !== word2 && ![...pairs].includes(word2)) {
          return false;
      }
      
      pointer += 1;
  }
  
  return true;
};