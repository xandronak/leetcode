/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

function splitBySymbol(word) {
  let result = [];
  
  let left = 0;
  let right = left + 1;
  
  while (right < word.length) {
      if (word[right] !== word[left]) {
          result.push(word.substring(left, right));
          left = right;
      }
      
      right += 1;
  }
  
  result.push(word.substring(left, right));
  
  return result;
}

function checkSymbols(source, target) {
  for (let i = 0; i < target.length; i++) {       
      if (source[i][0] !== target[i][0] || source[i].length !== target[i].length && (target[i].length > source[i].length || source[i].length < 3)) {
          return false;
      }
  }
  
  return true;
}

var expressiveWords = function(s, words) {
  let counter = 0;
  const splittedString = splitBySymbol(s);
  
  for (const word of words) {
      const splitted = splitBySymbol(word);
      
      if (splitted.length !== splittedString.length) {
          continue;
      }
      
      const result = checkSymbols(splittedString, splitted);
      
      if (result) {
          counter += 1;
      }        
  }
  
  return counter;
};