/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */

function getDistance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function traverse(workers, workerIndex, bikes, sum, visited, result, memo) {
  if (workerIndex >= workers.length) {
    result.value = Math.min(result.value, sum);
    return;
  }

  const visitedKey = visited.join(',');
  
  if (memo[workerIndex]?.[visitedKey] && memo[workerIndex][visitedKey] <= sum) {
    return;
  }

  memo[workerIndex][visitedKey] = sum;

  if (sum >= result.value) {
    return;
  }

  for (let bikeIndex = 0; bikeIndex < bikes.length; bikeIndex++) {
    if (!visited[bikeIndex]) {
      visited[bikeIndex] = true;

      const distance = getDistance(bikes[bikeIndex], workers[workerIndex]);
      traverse(workers, workerIndex + 1, bikes, sum + distance, visited, result, memo);

      visited[bikeIndex] = false;
    }
  }
}

var assignBikes = function (workers, bikes) {
  const visited = new Array(bikes.length).fill(false);
  const result = { value: Number.MAX_SAFE_INTEGER };
  const memo = Array(workers.length).fill().map(() => ({}));

  traverse(workers, 0, bikes, 0, visited, result, memo);

  return result.value;
};