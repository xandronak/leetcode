/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = 0;
  let set = new Set();
  
  for (let i = 0; i < s.length; i++) {
      let pointer = i;
      let acc = 0;
      
      while (pointer < s.length) {
          const val = s[pointer];

          if (set.has(val)) {
              break;
          }

          pointer += 1;
          set.add(val);
          acc += 1;
      }

      set.clear();
      result = Math.max(result, acc);
  }

  return result;
};


// sliding window

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let result = 0;
    
    let left = 0;
    let right = 0;

    while (right < s.length) {
        if (set.has(s[right])) {
            result = Math.max(result, right - left);
            set.delete(s[left]);
            left += 1;
        } else {
            set.add(s[right]);
            right += 1;
        }
    }

    return result = Math.max(result, right - left);
};