/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let row = 0;
  let column = 0;
  
  for (const move of moves) {
      if (move === "R") {
          row += 1;
      }
      if (move === "L") {
          row -= 1;
      }
      if (move === "U") {
          column += 1;
      }
      if (move === "D") {
          column -= 1;
      }
  }
  
  return row === 0 && column == 0;
};