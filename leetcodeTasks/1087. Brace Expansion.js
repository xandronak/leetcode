/**
 * @param {string} s
 * @return {string[]}
 */

function insertSymbols(results, symbols) {
  const values = [];
  
  if (results.length) {
      for (const result of results) {
          for (const symbol of symbols) {
              values.push(`${result}${symbol}`);
          }
      }
  } else {
      for (const symbol of symbols) {
          values.push(symbol);
      }
  }
  
  return values;
}

var expand = function(s) {
  let results = [];
  
  let pointer = 0;
  
  while(pointer < s.length) {
      if (s[pointer] === "{") {
          let start = pointer + 1;
          let end = start;
          
          while(s[end] !== "}") {
              end += 1;
          }
          
          const options = s.substring(start, end);
          const optionsArray = options.split(",").sort();
          
          results = insertSymbols(results, optionsArray);
          pointer = end + 1;
      } else {
          results = insertSymbols(results, [s[pointer]]);
          pointer += 1;
      }
  }
  
  return results;
};