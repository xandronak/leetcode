/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = [];

  let index = 0;

  while(index < nums.length) {
    const currentValue = nums[index];
    const lastRange = result[result.length - 1] || [];

    if (!lastRange[1] && lastRange[0] + 1 === currentValue) {
      lastRange.push(currentValue);
    }else if (lastRange[1] && lastRange[1] + 1 === currentValue) {
      lastRange[1] = currentValue;
    } else if (!lastRange[1] && lastRange[0] + 1 !== currentValue) {
      result.push([currentValue]);
    } else {
      result.push([currentValue]);
    }

    index++;
  }

  return result.map((values) => values.join('->'))
};