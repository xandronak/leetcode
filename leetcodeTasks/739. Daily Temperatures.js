/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const stack = [];
  const res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
          const [stackValue, stackIndex] = stack[stack.length - 1];
          res[stackIndex] = i - stackIndex;
          stack.pop();
      }

      stack.push([temperatures[i], i]);
  }

  return res;
};