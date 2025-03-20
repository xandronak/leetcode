function findPalindrome(source, target) {
  if (source.length !== target.length) {
    return false;
  }

  const map = new Map();

  for (const symbol of source) {
    if (!map.has(symbol)) {
      map.set(symbol, 0);
    }

    map.set(symbol, map.get(symbol) + 1);
  }

  for (const symbol of target) {
    if (!map.has(symbol)) {
      return false;
    }

    map.set(symbol, map.get(symbol) - 1);

    if (map.get(symbol) === 0) {
      map.delete(symbol);
    }
  }

  return map.size === 0;
}

console.log(findPalindrome("tact coa", "taco cat"));
console.log(findPalindrome("tact coa", "atco cta"));
console.log(findPalindrome("tact coa", "tacocat"));
console.log(findPalindrome("tact coa", "atao ata"));