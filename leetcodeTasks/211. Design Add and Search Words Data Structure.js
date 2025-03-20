class WordDictionary {
  constructor() {
    this.data = {};
  }

  addWord(word) {
    let pointer = this.data;

    for (let i = 0; i < word.length; i++) {
      const symbol = word[i];

      if (!pointer[symbol]) {
        pointer[symbol] = {
          _isWord: false,
        }
      }

      // add isWord flag if its the las symbol
      if (i === word.length - 1) {
        pointer[symbol]._isWord = true;
      }

      pointer = pointer[symbol];
    }
  }

  search(word) {
    return this.traverse([this.data], word);
  }

  traverse(queue, word) {
    const symbol = word[0];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      if (!symbol && node._isWord) {
        return true;
      }
      if (symbol === '.' && this.traverse(Object.values(node), word.substring(1))) {
        return true;
      }
      if (node[symbol] && this.traverse([node[symbol]], word.substring(1))) {
        return true;
      }
    }

    return false;
  }
}