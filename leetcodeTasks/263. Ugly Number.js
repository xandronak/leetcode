/**
 * @param {number} n
 * @return {boolean}
 */
const primeFactors = [2, 3, 5];

var isUgly = function(n) {
    if (n <= 0) return false;

    let rest = n;
    
    while (rest > 1) {
        let result = null;

        for (const factor of primeFactors) {
            if (rest % factor === 0) {
                result = rest / factor;
            }
        }

        if (!result) {
            return false;
        }

        rest = result;
    }

    return true;
};