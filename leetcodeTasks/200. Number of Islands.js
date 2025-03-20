// variant 45/49 tests passed

// const getLandKey = (row, column) => `${row}${column}`;

// const isOutOfMatrix = (row, column, grid) => {
//   return row < 0 || column < 0 || row > grid.length - 1 || column > grid[row].length - 1; 
// }

// const checkNeighbours = (row, column, grid, lands) => {
//   const steps = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1]
//   ];

//   for (let [y, x] of steps) {
//     const newRow = row + y;
//     const newColumn = column + x;

//     if (!isOutOfMatrix(newRow, newColumn, grid)) {
//       const neighbour = grid[newRow][newColumn];
//       const landKey = getLandKey(newRow, newColumn);

//       if (neighbour === '1' && !lands[landKey]) {
//         lands[landKey] = true;
//         checkNeighbours(newRow, newColumn, grid, lands);
//       }
//     };
//   };
// };

// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function(grid) {
//   const lands = {};

//   let count = 0;

//   for (let row = 0; row < grid.length; row++) {
//     for (let column = 0; column < grid[row].length; column++) {
//       const value = grid[row][column];
//       const landKey = getLandKey(row, column);

//       if (value === '1' && !lands[landKey]) {
//         count++;
//         lands[landKey] = true;
//         checkNeighbours(row, column, grid, lands);
//       }
//     }
//   } 

//   return count;
// };


// variant 2

const isOutOfMatrix = (row, column, grid) => {
  return row < 0 || column < 0 || row > grid.length - 1 || column > grid[row].length - 1 || grid[row][column] === '0'; 
}

const checkNeighbours = (row, column, grid) => {
  if (isOutOfMatrix(row, column, grid)) return;

  grid[row][column] = '0';

  const steps = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  for (let [y, x] of steps) {
    const newRow = row + y;
    const newColumn = column + x;

    checkNeighbours(newRow, newColumn, grid);
  };
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      const value = grid[row][column];
  
      if (value === '1') {
        count++;
        checkNeighbours(row, column, grid);
      }
    }
  } 

  return count;
};