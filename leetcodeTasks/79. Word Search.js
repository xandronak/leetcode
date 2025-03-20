/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function checkNeghbours(word, row, column) {
    if (!word) return true;
    
    const letter = word[0];
    
    if (board[row] && board[row][column] && letter === board[row][column]) {
      debugger;
      board[row][column] = false;

      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

      for (let [newRow, newColumn] of directions) {
        const isMatching = checkNeghbours(word.substring(1), row + newRow, column + newColumn);
        if (isMatching) return true;
      }

      board[row][column] = letter;
    } 

    return false;
  }

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      const isMatching = checkNeghbours(word, row, column);
      if (isMatching) return true;
    }
  }

  return false;
};

console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]], "AAB"));
