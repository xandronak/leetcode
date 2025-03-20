/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

// 1, 3, 5, 12, 10, 9, 8, 7, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  const length = mountainArr.length();
  
  let start = 0;
  let end = length - 1;
  
  while (start <= end) {
      const mid = Math.ceil((end - start) / 2) + start;
      const value = mountainArr.get(mid);
      const prevValue = mountainArr.get(mid - 1);
      
      if (value === target && (!prevValue || prevValue < value)) {
          return mid;
      }
      
      if ((value <= target && prevValue > value) || value > target) {
          end = mid - 1;
      } else {
          start = mid + 1;
      }
  }
  
  start = 0;
  end = length - 1;
  
  while (start <= end) {
      const mid = Math.ceil((end - start) / 2) + start;
      const value = mountainArr.get(mid);
      
      if (value === target) {
          return mid;
      }
      
      if ((value < target && mountainArr.get(mid + 1) > value) || value > target) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  
  return -1;
};