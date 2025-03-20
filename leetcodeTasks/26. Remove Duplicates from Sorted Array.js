/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let pointer = 0;

  while(pointer < nums.length) {
    if (nums[pointer] === nums[pointer + 1]) {
      nums.splice(pointer, 1);
    } else {
      pointer++;
    }
  }

  return nums.length;
};

// using Set
var removeDuplicates = function(nums) {
  const set = new Set(nums);
  nums.splice(0, nums.length, ...set);
  return nums.length;
};