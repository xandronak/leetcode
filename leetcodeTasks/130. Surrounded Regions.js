const VISITED = '_';

function isBorder(row, column, board) {
  return row === 0 || row === board.length - 1 || column === 0 || column === board[row].length - 1;
}

function isOutside(row, column, board) {
return row < 0 || row > board.length - 1 || column < 0 || column > board[row].length - 1;
}

function checkNeighbours(row, column, board) {
  if (isOutside(row, column, board) || board[row][column] === VISITED || board[row][column] === 'X') return;

  const directions = [
    [ 1, 0 ],
    [ 0, 1 ],
    [ -1, 0 ],
    [ 0, -1 ]
  ];

  board[row][column] = VISITED;

  for (const [y, x] of directions) {
    const newRow = row + y;
    const newColumn = column + x;

    checkNeighbours(newRow, newColumn, board);
  }
}

function solve(board) {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column] === 'O' && isBorder(row, column, board)) {
        checkNeighbours(row, column, board);
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column] === VISITED) {
        board[row][column] = 'O';
      } else {
        board[row][column] = 'X';
      }
    }
  }

  return board;
}