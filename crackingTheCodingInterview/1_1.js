const MAX_UTF8_LENGTH = 256;

function findUniqueSymbols(string) {
  if (!string || string.length === 1) {
    return false;
  }

  const symbols = new Array(MAX_UTF8_LENGTH);

  for (let i = 0; i < string.length; i++) {
    const charValue = string.charAt(i);

    if (symbols[charValue]) {
      return true;
    }

    symbols[charValue] = true;
  }

  return false;
}

// O(1)
// O(1)

console.log(findUniqueSymbols('1023lawdo')); // false
console.log(findUniqueSymbols('1023lawdo_0@')); // true
console.log(findUniqueSymbols('1023lawdo!@5')); // false
console.log(findUniqueSymbols('1023lawdozz')); // true
console.log(findUniqueSymbols('1023lawd}}z')); // true
