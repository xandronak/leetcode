// Link - https://leetcode.com/problems/letter-combinations-of-a-phone-number

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = [];

    const letters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    if (digits.length === 0) return result; 

    const backtrack = (i, str) => {
        if (str.length === digits.length) {
            result.push(str);
        } else {
            for(let letter of letters[digits[i]]) {
                backtrack(i + 1, str + letter);
            }
        }
    }

    backtrack(0, '');

    return result;
};