/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const digits = new Array(10).fill(0);

  let bulls = 0;
  let cows = 0;
  
  for (let i = 0; i < secret.length; i++) {
      const secretDigit = parseInt(secret[i]);
      const guessDigit = parseInt(guess[i]);

      if (secretDigit === guessDigit) {
          bulls += 1;
          continue;
      }

      if (digits[secretDigit] < 0) { 
          cows += 1;
      }
      
      if (digits[guessDigit] > 0) {    
          cows += 1;
      }
      
      digits[secretDigit] += 1;
      digits[guessDigit] -= 1; 
  }
  
  return `${bulls}A${cows}B`;
};


/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const map = {};
  let bulls = 0;
  let cows = 0;
  const guessValues = guess.split("");
  
  for (let i = 0; i < secret.length; i++) {
      if (!map[secret[i]]) {
          map[secret[i]] = []
      };
      
       map[secret[i]].push(i);
  }
  
  // find bulls
  for (let i = 0; i < guess.length; i++) {
      if (map[guessValues[i]]) {
          map[guessValues[i]] = map[guessValues[i]].filter((symbolIndex) => {
              if (symbolIndex === i) {
                  bulls += 1;
                  guessValues[i] = '_';
                  return false;
              }
              
              return true;
          });
      }
  }
  
  // find cows
  for (let i = 0; i < guessValues.length; i++) {
      if (guessValues[i] !== "_" && map[guessValues[i]]?.length) {
          cows += 1;
          map[guessValues[i]].pop()
      }
  }
  
  return `${bulls}A${cows}B`;
};
