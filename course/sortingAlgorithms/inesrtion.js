function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      if (array[i] < array[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (array[j] > array[i]) {
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }

  return array;
}

console.log(insertionSort([3, 4, 1, 8, 6, 3, 5, 9]));