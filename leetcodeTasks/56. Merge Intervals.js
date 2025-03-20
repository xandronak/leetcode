// Link - https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const result = [];

  const sortedIntervals = intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  for (const interval of sortedIntervals) {
      const [start, end] = interval;

      const lastIndex = result.length - 1;

      if (result.length === 0 || result[lastIndex][1] < start) {
          result.push([start, end])
      } else {
          result[lastIndex][0] = Math.min(result[lastIndex][0], start);
          result[lastIndex][1] = Math.max(result[lastIndex][1], end);
      }
  }

  return result;
};

console.log(merge([[1, 4], [0, 0]]));