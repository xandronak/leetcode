// Link - https://leetcode.com/problems/house-robber

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let maxOneBefore = 0;
  let maxTwoBefore = 0;


  for (let num of nums) {
      let currentMax = Math.max(maxTwoBefore + num, maxOneBefore);
      maxTwoBefore = maxOneBefore;
      maxOneBefore = currentMax;
      
  }

  return maxOneBefore;
};
