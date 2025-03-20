/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let pointer = 0;

  while(pointer < nums.length) {
    if (nums[pointer + 2] === nums[pointer]) {
      nums.splice(pointer + 2, 1)
    } else {
      pointer++;
    }
  }

  return nums.length;
};