// exampe: [0, 3, 5] [1, 2, 4] -> [0, 1, 2, 3, 4, 5]

function mergeSortedArrays(arr, arr2) {
  return [...arr, ...arr2].sort((a, b) => a - b);
};

// console.log(mergeSortedArrays([0, 3, 5], [1, 2, 4]));

function mergeSortedArrays2(arr, arr2) {
  let pointer1 = 0;
  let pointer2 = 0;

  const result = [];

  while(pointer1 !== arr.length || pointer2 !== arr2.length) {
    if (arr[pointer1] < arr2[pointer2] || !arr2[pointer2]) {
      result.push(arr[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  };

  return result;
};

console.log(mergeSortedArrays2([0, 3, 5], [1, 2, 4]));
