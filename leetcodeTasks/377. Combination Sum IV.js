/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const cache = new Array(target + 1).fill(0);

  cache[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        cache[i] = cache[i] + cache[i - num];
      }
    }
  }

  return cache[target];
};