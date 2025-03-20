/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function search(nums, target, toLeft) {
  let result = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
      const middle = Math.floor((end + start) / 2);

      if (nums[middle] > target) {
          end = middle - 1;
      } else if (nums[middle] < target) {
          start = middle + 1;
      } else {
          result = middle

          if (toLeft) {
              end = middle - 1;
          } else {
              start = middle + 1;
          }
      }
  }

  return result;
}

var searchRange = function(nums, target) {
const left = search(nums, target, true);
const right = search(nums, target, false);

return [left, right];
};