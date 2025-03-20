/**
 * @param {number[][]} matrix
 * @return {number}
 */

function traverse(matrix, row, column, map) {
    let result = 1;

    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ];
    const val = matrix[row][column];

    if (map[`${row}-${column}`]) {
        return map[`${row}-${column}`];
    }
    
    for (const [x, y] of directions) {
        const newValue = matrix[row + x]?.[column + y];
        
        if (newValue && newValue > val) {
            result = Math.max(traverse(matrix, row + x, column + y, map) + 1, result); 
        }
    }

    map[`${row}-${column}`] = result;
    
    return result;
}

var longestIncreasingPath = function(matrix) {
    let result = 0;
    const map = {};
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result = Math.max(traverse(matrix, i, j, map), result);
        }
    }

    return result;
};