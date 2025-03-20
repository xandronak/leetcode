/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    const totalLength = matrix.length * matrix[0].length;
    
    let rowIndex = 0;
    let colIndex = 0;

    let rowsStart = 0;
    let rowsEnd = matrix.length - 1;
    let colsStart = 0;
    let colsEnd = matrix[0].length - 1;

    let direction = 'left-right_top';

    while (result.length < totalLength) {
        result.push(matrix[rowIndex][colIndex]);

        switch (direction) {
            case 'left_top-bottom':
                if (rowIndex === rowsStart) {
                    colsStart += 1;
                    colIndex += 1;
                    direction = 'left-right_top';
                } else {
                    rowIndex -= 1;
                }
                break;
            case 'right-left_bottom':
                if (colIndex === colsStart) {
                    rowsEnd -= 1;
                    rowIndex -= 1;
                    direction = 'left_top-bottom';
                } else {
                    colIndex -= 1;
                }
                break;
            case 'right_top-bottom':
                if (rowIndex === rowsEnd) {
                    colsEnd -= 1;
                    colIndex -= 1;
                    direction = 'right-left_bottom';
                } else {
                    rowIndex += 1;
                }
                break;
            case 'left-right_top':
                 if (colIndex === colsEnd) {
                    rowsStart += 1;
                    rowIndex += 1;
                    direction = 'right_top-bottom';
                } else {
                    colIndex += 1;
                }
                break;
        }

        
    }

    return result;
};