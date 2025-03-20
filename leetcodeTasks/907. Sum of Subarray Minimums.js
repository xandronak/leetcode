/**
 * @param {number[]} arr
 * @return {number}
 */

const MOD = 1000000007;

var sumSubarrayMins = function(arr) {
    let result = 0;
    const stack = [];  // [[elem, index]]
    
    for (let i = 0; i <= arr.length; i++) {
        while (stack.length && (i === arr.length || stack[stack.length - 1][0] >= arr[i])) {
            const lastStackElement = stack.pop();

            const left = stack.at(-1) === undefined ? -1 : stack.at(-1)[1];
            const right = i;

            const count = ((lastStackElement[1] - left) * (right - lastStackElement[1])) % MOD;
            result += (count * lastStackElement[0]) % MOD;
            result %= MOD;
        }

        stack.push([arr[i], i]);
    }

    return result % MOD;
};