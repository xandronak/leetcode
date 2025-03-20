/**
 * @param {string[]} timePoints
 * @return {number}
 */

function parseTime(value) {
  const [hours, minutes] = value.split(":");
  return (+hours * 60) + +minutes;
}

var findMinDifference = function(timePoints) {
  if (!timePoints || timePoints.length === 1) {
      return 0;
  }

  let minValue = Number.MAX_SAFE_INTEGER;

  const sortedValues = timePoints
      .map((value) => parseTime(value))
      .sort((a, b) => a - b);

  for (let i = 1; i < sortedValues.length; i++) {
      const difference = sortedValues[i] - sortedValues[i - 1];

      minValue = Math.min(minValue, difference);
  }

  minValue = Math.min(minValue, Math.abs(24 * 60 - sortedValues[sortedValues.length - 1]) + sortedValues[0]);

  return minValue;
};