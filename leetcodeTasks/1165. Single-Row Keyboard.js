/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

const startCode = 97;

var calculateTime = function(keyboard, word) {
    const map = {};
    let result = 0;
    let pointer = 0;
    
    for (let i = 0; i < keyboard.length; i++) {
        map[keyboard[i]] = i;
    }
    
    for (let i = 0; i < word.length; i++) {
        const charIndex = map[word[i]];
        const diff = Math.abs(charIndex - pointer);
        
        result += diff;
        pointer = charIndex;
    }
    
    return result;
};