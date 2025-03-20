/**
 * @param {string} target
 * @return {string}
 */
const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];

const findSymbolPosition = (symbol) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === symbol) {
                return {
                    row: i,
                    column: j
                }
            }
        }
    }
}

var alphabetBoardPath = function(target) {
    let result = [];
    
    let row = 0;
    let column = 0;
    
    for (const symbol of target) {
        const symbolPosition = findSymbolPosition(symbol);
        
        while (column != symbolPosition.column || row != symbolPosition.row) {
            if (symbolPosition.row > row && board[row + 1][column]) {
                result.push("D");
                row += 1;
            }
            
            if (symbolPosition.row < row && board[row - 1][column]) {
                result.push("U");
                row -= 1;
            }
            
            if (symbolPosition.column > column && board[row][column + 1]) {
                result.push("R");
                column += 1;
            }
            
            if (symbolPosition.column < column && board[row][column - 1]) {
                result.push("L");
                column -= 1;
            }
        }
        
        result.push("!");
    }
    
    return result.join('');
};