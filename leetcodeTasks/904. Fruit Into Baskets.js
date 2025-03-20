/**
 * @param {number[]} fruits
 * @return {number}
 */

// sliding window

var totalFruit = function (fruits) {
  let map = new Map();
  let result = 0;

  let left = 0;
  let right = 0;

  while (right < fruits.length) {
    if (map.size === 2 && !map.has(fruits[right])) {
      result = Math.max(result, right - left);

      map.set(fruits[left], map.get(fruits[left]) - 1);

      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left]);
      }

      left += 1;
    } else {
      map.set(fruits[right], (map.get(fruits[right]) ?? 0) + 1);
      right += 1;
    }
  }

  return result = Math.max(result, right - left);
};
