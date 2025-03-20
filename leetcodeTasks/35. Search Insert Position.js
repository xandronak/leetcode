/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums || nums.length === 0) {
      return 0;
  }

  let start = 0;
  let end = nums.length - 1;
  let middle = Math.ceil((end + start) / 2);

  while (end !== start) {
      const middleValue = nums[middle];

      if (middleValue === target) {
          return middle;
      }
      
      if (middleValue > target) {
          end = Math.max(middle - 1, start);
      } else {
          start = Math.min(middle + 1, end);
      }

      middle = Math.ceil((end + start) / 2);
  }

  if (nums[middle] < target) {
      return middle + 1;
  }

  return middle;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums || nums.length === 0) {
      return 0;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
      const middle = Math.ceil((end + start) / 2);
      const middleValue = nums[middle];

      if (middleValue === target) {
          return middle;
      }
      
      if (middleValue > target) {
          end = middle - 1;
      } else {
          start = middle + 1;
      }
  }

  return start;
};