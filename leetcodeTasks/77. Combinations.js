/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = [];

  const backtrack = (arr, number) => {
    if (arr.length === k) {
      result.push(arr);
      return;
    }

    for (let i = number; i <= n; i++) {
      backtrack([...arr, i], i + 1);
    }
  }

  backtrack([], 1);

  return result;
};