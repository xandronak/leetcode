/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let pointer = 0;

  while(pointer < nums.length) {
    if (nums[pointer] === val) {
      nums.splice(pointer, 1);
    } else {
      pointer++;
    }
  }

  return nums.length
};