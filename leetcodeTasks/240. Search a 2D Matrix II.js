// Link - https://leetcode.com/problems/search-a-2d-matrix-ii

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let row = 0;
  let column = matrix[row].length - 1;

  while(row < matrix.length && col >= 0) {
    if (matrix[row][column] === target) return true;

    if (matrix[row][column] > target) {
      column = column - 1;
    } else {
      row = row + 1;
    }
  }

  return false
};

// O(n+m)



// var searchMatrix = function(matrix, target) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === target) return true;
//     }
//   }

//   return false;
// };

// O(n^2)
// O(1)

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5);