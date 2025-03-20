/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */

// var shortestDistanceColor = function(colors, queries) {
//     return queries.map(([index, targetColor]) => {
//         let pointer = 0;
        
//         while (index - pointer >= 0 || index + pointer < colors.length) {
//             if (colors[index - pointer] === targetColor || colors[index + pointer] === targetColor) {
//                     return pointer;
//             }
            
//             pointer += 1;
//         }
        
//         return -1;
//     });
// };

var shortestDistanceColor = function(colors, queries) {
  const colorsMap = {};
  
  for (let i = 0; i < colors.length; i++) {
      if (!colorsMap[colors[i]]) {
          colorsMap[colors[i]] = [];
      }
      
      colorsMap[colors[i]].push(i);
  }
  
  // { 2: [109], 1: [0, 1, 2, 3] }
  
   return queries.map(([index, targetColor]) => {
      const colorIndexies = colorsMap[targetColor];
      let result = colors.length;
       
      if (!colorIndexies) {
          return -1;
      }
       
      for (let i = 0; i < colorIndexies.length; i++) {
          const diff = Math.abs(index - colorIndexies[i]);
          
          result = Math.min(result, diff)
      }
       
      return result;
  });
};