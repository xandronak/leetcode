/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const isFillablePixel = (image, row, column, source) => {
  return (
    row >= 0
    && row < image.length
    && column >= 0
    && column < image[row].length
    && image[row][column] === source
  );
};

const fillNeighbours = (image, row, column, source, target) => {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];

  for (const [x, y] of directions) {
    const newRow = row + x;
    const newColumn = column + y;

    if (isFillablePixel(image, newRow, newColumn, source)) {
      image[newRow][newColumn] = target;
      fillNeighbours(image, newRow, newColumn, source, target);
    }
  }
}

var floodFill = function(image, sr, sc, color) {
  const targetColor = image[sr][sc];
 
  if (targetColor !== color) {
    image[sr][sc] = color;
    fillNeighbours(image, sr, sc, targetColor, color);
  }
  
  return image;
};