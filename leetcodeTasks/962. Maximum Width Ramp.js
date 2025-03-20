/**
 * @param {number[]} nums
 * @return {number}
 */

var maxWidthRamp = function(nums) {
  let n = nums.length;
  let stack = [];
  let result = 0;
  
  for (let i = 0; i < n; i++) {
      if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
          stack.push(i);
      }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
      while (stack.length && nums[stack[stack.length - 1]] <= nums[j]) {
          const lastStackIndex = stack.pop();
          result = Math.max(result, j - lastStackIndex);
      }
  }

  return result;
};