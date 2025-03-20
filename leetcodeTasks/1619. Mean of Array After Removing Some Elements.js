/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a, b) => a - b);
  
  const itemsToRemove = arr.length / 100 * 5;
  
  let sum = 0;
  
  for (let i = itemsToRemove; i < arr.length - itemsToRemove; i++) {
      sum += arr[i];
  }
  
  return sum / (arr.length - itemsToRemove * 2);
};