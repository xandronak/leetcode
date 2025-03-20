/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
class AutocompleteSystem {
  dictionary = { nodes: {}, priority: null };

  currentPointer = null;

  currentValue = "";
  
  constructor(sentences, times) {
      for (let i = 0; i < sentences.length; i++) {
          this.addWord(sentences[i], times[i]);
      }
      
      this.currentPointer = this.dictionary;
  }

  addWord(word, times) {
      let pointer = this.dictionary;
      
      for (let i = 0; i < word.length; i++) {
          const symbol = word[i];
          
          if (!pointer.nodes[symbol]) {
              pointer.nodes[symbol] = { nodes: {}, priority: null };
          }
          
          if (i === word.length - 1 && pointer.nodes[symbol].priority) {
              pointer.nodes[symbol].priority += 1;
          }
          
          if (i === word.length - 1 && !pointer.nodes[symbol].priority) {
              pointer.nodes[symbol].priority = times;
          }
          
          pointer = pointer.nodes[symbol];
      }
  }

  input(value) {
      const values = [];
      
      if (value === "#") {
          this.addWord(this.currentValue, 1);
          
          this.currentPointer = this.dictionary;
          this.currentValue = "";
          
          return values;
      }
      
      this.currentValue += value;
      this.currentPointer = this.currentPointer?.nodes[value];
      
      this.traverse(this.currentPointer, this.currentValue, values);
      
      return this.sortValues(values);
  }

  traverse(root, value, values) {
      if (!root) {
          return;
      }
      
      if (root.priority) {
          values.push([value, root.priority]);
      }
      
      const childrenKeys = Object.keys(root.nodes);
      
      for (const childrenKey of childrenKeys) {
          this.traverse(root.nodes[childrenKey], value + childrenKey, values);
      }
  }

  sortValues(values) {
      return [...values].sort((a, b) => {
          if (a[1] !== b[1]) {
              return b[1] - a[1];
          }
          
          return a[0].localeCompare(b[0]);
      }).map((item) => item[0]).slice(0, 3);
  }
}

/** 
* Your AutocompleteSystem object will be instantiated and called as such:
* var obj = new AutocompleteSystem(sentences, times)
* var param_1 = obj.input(c)
*/