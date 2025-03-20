// example: [1, 2, 3, 4, 5, 2] -> 2

// example: [1, 2, 3, 4] => undefined

// example: [1, 2, 3, 3, 5, 2] -> 2

// example: [1, 2, 3, 3, 5, 2, 4, 2, 3, 4, 5, 6, 5, 1] -> 1


function findDuplicatedNumber(arr) {
  const map = {};
  let resultIndex = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] < resultIndex) {
      resultIndex = map[arr[i]];
    };
    map[arr[i]] = i;

  }

  return arr[resultIndex];
};

console.log(findDuplicatedNumber([1, 2, 3, 4, 5, 2]));
console.log(findDuplicatedNumber([1, 2, 3, 4]));
console.log(findDuplicatedNumber([1, 2, 3, 3, 5, 2]));
console.log(findDuplicatedNumber([1, 2, 3, 3, 5, 2, 4, 2, 3, 4, 5, 6, 5, 1]));