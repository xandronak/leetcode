/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const results = {
      row: {},
      column: {},
      box: {}
  };

  if (!board) {
      return false;
  }

  for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board[row].length; column++) {
          const value = +board[row][column];

          if (isNaN(value)) {
              continue;
          }

          if (!results.row[row]) {
              results.row[row] = [];
          }
          results.row[row].push(value);

          if (!results.column[column]) {
              results.column[column] = [];
          }
          results.column[column].push(value);

          const boxIndex = (Math.floor(column / 3)) + (Math.floor(row / 3) * 3);
          if (!results.box[boxIndex]) {
              results.box[boxIndex] = [];
          }
          results.box[boxIndex].push(value);
      }
  }

  for (const obj of Object.values(results)) {
      for (const values of Object.values(obj)) {
          const uniqueValues = new Set(values);

          if (values.length !== uniqueValues.size) {
              return false;
          }
      }
  }

  return true;
};