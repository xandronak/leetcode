/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */

var wordsTyping = function(sentence, rows, cols) {
  let row = 0;
  let column = 0;
  let wordIndex = 0;
  let counter = 0;
  
  while (row < rows) {
      if (wordIndex === sentence.length) {
          counter += 1;
          wordIndex = 0;
      }
      
      const wordLength = sentence[wordIndex].length;
      
      if (wordLength > cols) {
          return counter;
      }
      
      if (wordLength > cols - column) {
          row += 1;
          column = 0;
      }
      
      wordIndex += 1;
      column += wordLength + 1;
  }
  
  return counter;
};