const jump = (index, arr) => {
  if (index === arr.length - 1) return true;
  if (index >= arr.length) return false; 

  const maxStep = arr[index];

  for (let i = 1; i <= maxStep; i++) {
    const newIndex = index + i;

    if (jump(newIndex, arr)) return true;
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  return jump(0, nums);
};