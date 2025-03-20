
// DP

class Trie {
  constructor() {
    this.data = {}
  }

  traverse(word) {
    let pointer = this.data;

    for (let symbol of word) {
      if (!pointer[symbol]) {
        return null;
      }
      pointer = pointer[symbol];
    }

    return pointer;
  }

  insert(word) {
    let pointer = this.data;

    for (let symbol of word) {
      if (!pointer[symbol]) {
        pointer[symbol] = {};
      }
      pointer = pointer[symbol];
    }

    pointer.isWord = true;
  }

  search(word) {
    const node = this.traverse(word);
    return node ? !!node.isWord : false;
  }

  startsWith(prefix) {
    const node = this.traverse(prefix);
    return !!node;
  }
}



// recursion

var Trie = function() {
  this.data = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  function insertIntoTrie(head, restWord) {
    if (!restWord) {
      head.word = true;
      return;
    };
    
    const symbol = restWord[0];

    if (!head[symbol]) {
      head[symbol] = {};
    }

    insertIntoTrie(head[symbol], restWord.substring(1));
  }

  insertIntoTrie(this.data, word);
};

Trie.prototype.search = function(word) {
  function traverse(head, restWord) {
    if (!restWord) return !!head.word;

    const symbol = restWord[0];

    if (head[symbol]) {
      return traverse(head[symbol], restWord.substring(1));
    }

    return false;
  }

  return traverse(this.data, word);
};

Trie.prototype.startsWith = function(prefix) {
  function traverse(head, restWord) {
    if (!restWord) return true;

    const symbol = restWord[0];

    if (head[symbol]) {
      return traverse(head[symbol], restWord.substring(1));
    }

    return false;
  }

  return traverse(this.data, prefix);
};

