/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = {};

  for (let i = 0; i < magazine.length; i++) {
    const symbol = magazine[i];
    
    if (!map[symbol]) {
      map[symbol] = 1;
    } else {
      map[symbol] = map[symbol] + 1;
    }
    
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]]) {
      return false;
    } else {
      map[ransomNote[i]] = map[ransomNote[i]] - 1;
    }
  }

  return true;
};