/**
 * @param {number[]} nums
 * @return {string}
 */

// var largestNumber = function(nums) {
//   let result = [];

//   const sortedByFirstDigit = nums.sort((a, b) => +String(b)[0] - +String(a)[0]);

//   function getNumberWeight(number) {
//       const formattedNumber = String(number);
//       const length = formattedNumber.length;
//       const digitsSum = formattedNumber.split('').reduce((acc, val) => acc + +val, 0);
//       return digitsSum / length;
//   }

//   function findBiggestNumbersByDigit(digit, arr) {
//       const filtered = arr.filter((val) => String(val)[0] === String(digit));
//       return filtered.sort((a, b) => getNumberWeight(b) - getNumberWeight(a));
//   };

//   for (let i = 9; i >= 0; i--) {
//       result = [...result, ...findBiggestNumbersByDigit(i, sortedByFirstDigit)];
//   }

//   return result.join('');
// };

const largestNumber = (nums) => {
  if(!nums || nums.length === 0) {
      return '0';
  }
  
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  if(nums[0] === 0) {
      return '0';
  }
  return nums.join('');
};

console.log(largestNumber([3,30,34,5,9]));