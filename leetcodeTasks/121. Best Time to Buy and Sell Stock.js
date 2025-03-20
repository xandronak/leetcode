/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = null;
  let result = 0;
  
  for (let price of prices) {
    if (price < min || min === null) {
      min = price;
    }
    if (min !== null && price > min) {
      result = Math.max(result, price - min);
    }
  }

  return result;
};