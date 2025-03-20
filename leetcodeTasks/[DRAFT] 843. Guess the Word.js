class Master {
  constructor(words, secretWord, maxAttempts = 10) {
    this.maxAttempts = maxAttempts;
    this.attempts = 0;
    this.words = words;
    this.secretWord = secretWord;
  }

  guess(word) {
    this.attempts++;
    
    if (this.attempts > this.maxAttempts) {
      throw new Error('No attempts');
    }

    if (this.words.findIndex(item => item === word) === -1) {
      return -1;
    }

    return checkSimilars(this.secretWord, word);
  }
}


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

const sortWord = (word) => {
  return word.split('').sort().join('')
}

const checkSimilars = (pattern, word) => {
  let count = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === word[i]) {
      count++;
    }
  }

  return count;
}

const getDifferentWords = (words) => {
  const possibleWords = [];
  
  for (let word of words) {
    const result = possibleWords.find(val => checkSimilars(word, val) > 0);

    if (!result) {
      possibleWords.push(word);
    }
  }

  return possibleWords.sort();
}

const getPossibleWords = (pattern, count, words) => {
  const possibleWords = [];
  
  for (let word of words) {
    const result = checkSimilars(pattern, word);

    if (count === result && word !== pattern) {
      possibleWords.push(word);
    }
  }

  return possibleWords;
};

const checkVariants = (possibleWords, count, master) => {
  const words = [...possibleWords];

  let word = words.shift();
  let takeLast = true;

  while(possibleWords.length) {
    const result = master.guess(word);
    console.log('Check word ' + word + ', result is ' + result);
    
    if (result === 6) return { wasFound: true, word };
    if (result > count) return { wasFound: false, word, count: result }
    
    if (takeLast) {
      word = words.pop();
      takeLast = false;
    } else {
      word = words.shift();
      takeLast = true;
    }
  }
}

const search = (words, count, master) => {
  const result = checkVariants(words, count, master);

  if (result.wasFound) return result.word;
  
  const possibleWords = getPossibleWords(result.word, result.count, words);

  return search(possibleWords, result.count, master);
}

/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(words, master) {
  const differentWords = getDifferentWords(words);
  const result = checkVariants(differentWords, 0, master);

  if (result.wasFound) return result.word;

  if (result.count > 0) {
    const possibleWords = getPossibleWords(result.word, result.count, words);
    return search(possibleWords, result.count, master);
  }

  return search(words, 0, master);
};

const secretWord = "vftnkr";
const words = ["mjpsce","giwiyk","slbnia","pullbr","ezvczd","dwkrmt","qgzebh","wvhhlm","kqbmny","zpvrkz","pdwxvy","gilywa","gmrrdc","vvqvla","rmjirt","qmvykq","mhbmuq","unplzn","qkcied","eignxg","fbfgng","xpizga","twubzr","nnfaxr","skknhe","twautl","nglrst","mibyks","qrbmpx","ukgjkq","mhxxfb","deggal","bwpvsp","uirtak","tqkzfk","hfzawa","jahjgn","mteyut","jzbqbv","ttddtf","auuwgn","untihn","gbhnog","zowaol","feitjl","omtiur","kwdsgx","tggcqq","qachdn","dixtat","hcsvbw","chduyy","gpdtft","bjxzky","uvvvko","jzcpiv","gtyjau","unsmok","vfcmhc","hvxnut","orlwku","ejllrv","jbrskt","xnxxdi","rfreiv","njbvwj","pkydxy","jksiwj","iaembk","pyqdip","exkykx","uxgecc","khzqgy","dehkbu","ahplng","jomiik","nmcsfe","bclcbp","xfiefi","soiwde","tcjkjp","wervlz","dcthgv","hwwghe","hdlkll","dpzoxb","mpiviy","cprcwo","molttv","dwjtdp","qiilsr","dbnaxs","dbozaw","webcyp","vftnkr","iurlzf","giqcfc","pcghoi","zupyzn","xckegy"];

const master = new Master(words, secretWord, 12);

console.log(findSecretWord(words, master));