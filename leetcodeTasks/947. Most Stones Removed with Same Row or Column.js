/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  let counter = 0;
  const map = {
      rows: {
          
      },
      columns: {
          
      },
  };
  
  for (const stone of stones) {
      if (!map.rows[stone[0]]) {
          map.rows[stone[0]] = 0;
      }
      map.rows[stone[0]] += 1;
      
      if (!map.columns[stone[1]]) {
          map.columns[stone[1]] = 0;
      }
      map.columns[stone[1]] += 1;
  }
  
  stones.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1]; // Sort by y if x is equal
      }
      return a[0] - b[0];
  });
  
  for (const stone of stones) {
      if (map.rows[stone[0]] > 1 || map.columns[stone[1]] > 1) {
          map.rows[stone[0]] -= 1;
          map.columns[stone[1]] -= 1;
          counter += 1;
      }
  }
  
  return counter;
};