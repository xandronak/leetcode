var spiralOrder = function(matrix) {
  debugger;
  let rowPointer = 0;
  let columnPointer = 0;

  let direction = 'right';

  const result = [];

  while(matrix.length) {
    result.push(matrix[rowPointer][columnPointer]);

    if (direction === 'right' && !matrix[rowPointer][columnPointer + 1]) {
      // turn down
      matrix.splice(rowPointer, 1);
      direction = 'down';
      result.push(matrix[rowPointer][columnPointer]);
    }

    if (direction === 'down' && !matrix[rowPointer + 1]) {
      // turn left
      matrix[rowPointer].splice(columnPointer, 1);
      direction = 'left';
    }

    if (direction === 'left' && columnPointer === 0) {
      // turn top
      matrix.splice(rowPointer, 1);
      direction = 'top';
    }

    if (direction === 'top' && !matrix[rowPointer + 1]) {
      // turn right
      direction = 'right';
    }
  
    if (direction === 'right') {
      columnPointer++;
    }
    if (direction === 'down') {
      matrix[rowPointer].splice(columnPointer, 1);
      rowPointer++;
    }
    if (direction === 'left') {
      columnPointer--;
    }
    if (direction === 'top') {
      matrix[rowPointer].splice(columnPointer, 1);
      rowPointer--;
    }
  }

  return result;
};

spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);