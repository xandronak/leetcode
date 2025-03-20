/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// O(n^2)
var twoSum = function(numbers, target) {
  const result = [];

  let pointer1 = 0;

  while (result.length < 2) {
    const delta = target - numbers[pointer1];

    let pointer2 = pointer1;
    while (pointer2 < numbers.length) {
      if (numbers[pointer2] === delta && pointer1 !== pointer2) {
        result.push(pointer1 + 1);
        result.push(pointer2 + 1);
        break;
      }

      pointer2++;
    }

    pointer1++;
  }

  return result;
};

// O(n)
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;

  while (pointer1 < pointer2) {
    const sum = numbers[pointer1] + numbers[pointer2];

    if (sum === target) {
      return [pointer1 + 1, pointer2 + 1];
    } else if (sum > target) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
};

console.log(twoSum([2,3,4], 6));