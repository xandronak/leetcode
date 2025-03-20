/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  debugger;

  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let length = 1;
    let temp = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (temp < nums[j]) {
        temp = nums[j];
        length++;
      }
    }

    max = Math.max(max, length);
  }

  return max;
};

lengthOfLIS([0,1,0,3,2,3]);