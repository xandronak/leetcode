/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const combinations = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

  combinations[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      combinations[i] = Math.min(combinations[i], combinations[i - coin] + 1)
    }
  }

  return combinations[amount] === Number.MAX_SAFE_INTEGER ? -1 : combinations[amount];
};

// bruteforce
// var coinChange = function(coins, amount) {
//   if (amount === 0) return 0;

//   const combinations = [];

//   function backtrack(leftAmount, availableCoins, totalCount) {
//     debugger;
//       if (leftAmount === 0) {
//           combinations.push(totalCount);
//           return;
//       };

//       for (let i = 0; i < availableCoins.length; i++) {
//           const count = Math.floor(leftAmount / availableCoins[i]) + totalCount;
//           const restSum = leftAmount % availableCoins[i];
//           const restArray = [...availableCoins];

//           restArray.splice(i, 1);

//           backtrack(restSum, restArray, count);
//       }
//   }

//   backtrack(amount, coins, 0);

//   return Math.min(...combinations) || -1;
// };

console.log(coinChange([186,419,83,408], 6249));