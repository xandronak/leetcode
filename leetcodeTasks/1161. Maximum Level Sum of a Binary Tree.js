/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function bfs(root, level, results) {
  if (!root || (!root.left && !root.right)) {
      return;
  }
  
  const children = [root.left, root.right];
  
  let sum = 0;
  
  for (const node of children) {
      if (!node) {
          continue;
      }
      
      sum += node.val;
      
      bfs(node, level + 1, results);
  }

  results[level] = results[level] ? results[level] + sum : sum;   
}

var maxLevelSum = function(root) {
  if (!root || !Number.isFinite(root.val)) {
      return 0;
  }
  
  const results = { 1: root.val };
  
  bfs(root, 2, results);
  
  let maxValue = Number.MIN_SAFE_INTEGER;
  let minLevel = Number.MAX_SAFE_INTEGER;
  
  Object.keys(results).forEach((level) => {
      if (maxValue < results[level] || (maxValue === results[level] && minLevel > level)) {
          maxValue = results[level];
          minLevel = +level;
      }
  });
  
  return minLevel;
};