/**
 * @param {string[]} words
 */
class StreamChecker {
  dictionary = { children: {}, end: false };
  currentPointers = [this.dictionary];
  
  constructor(words) {
      for (const word of words) {
          this.addWord(word);
      }
      
      console.log(this.dictionary.children.a);
  }
  
  addWord(word) {
      let pointer = this.dictionary;
      
      for (let i = 0; i < word.length; i++) {
          const symbol = word[i];
          
          if (!pointer.children[symbol]) {
              pointer.children[symbol] = { children: {}, end: false };
          }
          
          if (i === word.length - 1) {
              pointer.children[symbol].end = true;
          }
          
          pointer = pointer.children[symbol];
      }
  }
  
  query(letter) {
      const pointers = [];
      let result = false;
      
      for (const pointer of this.currentPointers) {
          if (pointer.children[letter]) {
              if (pointer.children[letter].end) {
                 result = true; 
              }
              
              pointers.push(pointer.children[letter]);
          }
      }
      
      pointers.push(this.dictionary);
      
      this.currentPointers = pointers;
      
      return result;
  }
}
