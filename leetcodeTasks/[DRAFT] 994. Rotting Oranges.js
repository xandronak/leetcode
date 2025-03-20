/**
 * @param {number[][]} grid
 * @return {number}
 */

const isFreshOrange = (grid, row, column) => {
  const isReachable = row >= 0 && row < grid.length && column >= 0 && column < grid[row].length;
  return isReachable && grid[row][column] === 1;
}

const checkNeighbours = (grid, row, column) => {
  let result = false;

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];

  for (const [x, y] of directions) {
    const newRow = row + y;
    const newColumn = column + x;

    if (isFreshOrange(grid, newRow, newColumn)) {
      result = true;
      grid[newRow][newColumn] = 2;
    }
  }

  return result;
};

var orangesRotting = function(grid) {
  if (!grid || grid.length === 0) {
    return grid;
  }

  let result = -1;
  let inProcess = true;

  while (inProcess) {
    let temp = false;

    for (let row = 0; row < grid.length; row++) {
      for (let column = 0; column < grid[row].length; column++) {
        if (grid[row][column] === 2) {
          temp = checkNeighbours(grid, row, column);
        }
      }
    }

    inProcess = temp;
    result++;
  }

  const hasFreshOranges = grid
    .flat()
    .filter(fruit => fruit === 1)
    .length > 0;

  return hasFreshOranges ? -1 : result;
};