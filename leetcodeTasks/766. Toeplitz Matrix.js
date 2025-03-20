/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

var isToeplitzMatrix = function(matrix) {
  const map = {};
  
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          const diagonalIndex = i - j;
          
          if (!Number.isFinite(map[diagonalIndex])) {
              map[diagonalIndex] = matrix[i][j];
          }
          
          if (map[diagonalIndex] !== matrix[i][j]) {
              return false;
          }
      }
  }
  
  return true;
};