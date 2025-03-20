function compareStrings(string1, string2) {
  if (!string1 || !string2 ||string1.length !== string2.length) {
    return false;
  }

  string1 = string1.split("").sort().join(""); // O(n * logn)
  string2 = string2.split("").sort().join(""); // O(k * logk)

  return string1 === string2;
}

console.log(compareStrings('dog', 'god')); // true
console.log(compareStrings('dar', 'ard')); // true
console.log(compareStrings('', 'god')); // false
console.log(compareStrings('dog', 'godd')); // false
 
// O(n*logn)
// O(n)



function compareStringsMap(string1, string2) {
  if (!string1 || !string2 ||string1.length !== string2.length) {
    return false;
  }

  const map = {};

  for (let i = 0; i < string1.length; i++) {
    if (!map[string1[i]]) {
      map[string1[i]] = 1;
    } else {
      map[string1[i]] += 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (!map[string2[i]]) {
      return false;
    }

    if (map[string2[i]] === 1) {
      delete map[string2[i]];
    } else {
      map[string2[i]] -= 1;
    }
  }

  return !Object.keys(map).length;
}

// O(n)
// O(n)

console.log(compareStringsMap('dog', 'god')); // true
console.log(compareStringsMap('dar', 'ard')); // true
console.log(compareStringsMap('', 'god')); // false
console.log(compareStringsMap('dog', 'godd')); // false


function compareStringsArray(string1, string2) {
  if (!string1 || !string2 ||string1.length !== string2.length) {
    return false;
  }

  const array1 = new Array(256);
  const array2 = new Array(256);

  for (let i = 0; i < string1.length; i++) {
    const charCode = string1.charCodeAt(i);

    if (!array1[charCode]) {
      array1[charCode] = 1;
    } else {
      array1[charCode] += 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    const charCode = string2.charCodeAt(i);

    if (!array2[charCode]) {
      array2[charCode] = 1;
    } else {
      array2[charCode] += 1;
    }
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

// O(n)
// O(1)

console.log(compareStringsArray('dog', 'god')); // true
console.log(compareStringsArray('dar', 'ard')); // true
console.log(compareStringsArray('', 'god')); // false
console.log(compareStringsArray('dog', 'godd')); // false