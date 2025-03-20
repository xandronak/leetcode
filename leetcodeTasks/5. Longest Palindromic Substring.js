function checkSubstring(str) {
  if (!str) return false;
  if (str.length === 1) return true;

  let pointer = 0;
  let pointer2 = str.length - 1;

  while (pointer < pointer2) {
    if (str[pointer] !== str[pointer2]) return false; 

    pointer++;
    pointer2--;
  }

  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || s.length === 1) return s;

  let limit = s.length;
  let result = '';

  while (limit > 0) {
    let start = 0;
    let end = limit;

    while (end <= s.length) {
      const substr = s.substring(start, end);
      if (checkSubstring(substr) && substr.length > result.length) {
        result = substr;
      }

      start++;
      end++;
    }

    limit--;
  }

  return result;
};

// function findSubstring(index, str) {
//   let leftPointer = index - 1;
//   let rightPointer = index + 1;

//   let substring = str[index];

//   while (leftPointer >= 0 && rightPointer < str.length) {
//     if (str[leftPointer] === str[rightPointer]) {
//       substring = str[leftPointer] + substring + str[rightPointer];
//     };

//     if (str[index] === str[rightPointer]) {
//       substring = substring + str[rightPointer];
//     }

//     rightPointer++;
//     leftPointer--;
//   }

//   return substring;
// }

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   debugger;
//   if (!s || s.length === 1) return s;

//   let result = '';

//   for (let i = 0; i < s.length; i++) {
//     const palindrome = findSubstring(i, s);
//     if (palindrome.length > result.length) {
//       result = palindrome
//     }
//   }

//   return result;
// };

// longestPalindrome("cbbd");