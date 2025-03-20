var lengthOfLastWord = function(s) {
  debugger;
  let counter = 0;
  
  for (let i = s.length - 1; i >= 0; i--) {
    if ((!counter && s[i] !== ' ') || (counter && s[i] !== ' ')) {
      counter++;
    } else if (counter && s[i] === ' ') {
      break;
    }
  }

  return counter;
};

lengthOfLastWord("Hello World");