/**
 * @param {number[]} arr
 * @return {number}
 */

/*
You may jump forward from index i to index j (with i < j) in the following way:

During odd-numbered jumps (i.e., jumps 1, 3, 5, ...), you jump to the index j such that arr[i] <= arr[j] and arr[j] is the smallest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
During even-numbered jumps (i.e., jumps 2, 4, 6, ...), you jump to the index j such that arr[i] >= arr[j] and arr[j] is the largest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
It may be the case that for some index i, there are no legal jumps.
*/

// [5,1,3,4,2]
// start from 4
// 

function jumpFromIndex(i, arr, results) {
  let jumpIndex = 1;
  let pointer = i;
  let result = true;
  
  while(pointer < arr.length) {
      if (pointer === arr.length - 1) {
        break;
      }
      const isEven = jumpIndex % 2 === 0;
      const restValues = arr.slice(pointer + 1);
      const nextValue = jumpIndex % 2 === 0 ? Math.max(...restValues) : Math.min(...restValues);
      const index = restValues.findIndex(item => item === nextValue) + pointer + 1;

      if (results[index]?.[isEven ? "odd" : "even"]) {
        if (!results[pointer]) {
          results[pointer] = {};
        }

        results[pointer][isEven ? "odd" : "even"] = results[index][isEven ? "odd" : "even"];
        return results[index][isEven ? "odd" : "even"];
      }

      if (!index || (isEven && nextValue > arr[pointer]) || (!isEven && nextValue < arr[pointer])) {
        result = false;
        break;
      }
      
      pointer = index;
      jumpIndex += 1;
  }
  
  if (!results[i]) {
    results[i] = {};
  }

  results[i][jumpIndex % 2 === 0 ? "even" : "odd"] = result;
  return result;
}

var oddEvenJumps = function(arr) {
  if (!arr.length) {
      return 0;
  }
  
  let result = 0;
  const results = new Array(arr.length).fill()
  
  for (let i = arr.length - 1; i >= 0; i--) {
      result += +jumpFromIndex(i, arr, results);
  }
  
  return result;
};

console.log(oddEvenJumps([10,13,12,14,15]));