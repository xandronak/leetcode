/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while (min < max) {
    let middle = min + Math.floor((max - min + 1) / 2);
    const value = nums[middle];

    if (value > target) {
      max = middle - 1;
    } else {
      min = middle;
    }
  }

  return nums[min] === target ? min : -1;
};