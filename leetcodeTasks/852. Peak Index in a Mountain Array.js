/**
 * @param {number[]} arr
 * @return {number}
 */

var peakIndexInMountainArray = function(arr) {
  let start = 0;
  let end = arr.length - 1;
  
  let maxValueIndex = 0;
  
  while (start <= end) {
      const mid = Math.ceil((end - start) / 2) + start;
      
      if (arr[mid] > arr[maxValueIndex]) {
          maxValueIndex = mid;
      }
      
      if (arr[mid + 1] && arr[mid + 1] > arr[mid]) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  
  return maxValueIndex;
};