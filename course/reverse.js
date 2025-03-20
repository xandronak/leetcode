// reverse function gets one argument, which is string
// reverse function should reverse the provided string

// example: '123' -> '321'
// example: 'Hi!' -> '!iH'


function reverse(str) {
  const result = [];
  
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join('');
}

// O(n)

console.log(reverse('How are you now? I\'m good, thank you'));