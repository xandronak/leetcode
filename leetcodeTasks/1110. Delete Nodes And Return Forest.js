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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

function bfs(root, target, results) {
  if (!root) {
      return;   
  }
  
  if (target.includes(root.val)) {
      if (root.left && !target.includes(root.left.val)) {
          results.push(root.left);
      }
      
      if (root.right && !target.includes(root.right.val)) {
          results.push(root.right);
      }
  }
  
  if (root.left) {
      bfs(root.left, target, results);
      
      if (target.includes(root.left.val)) {
          root.left = null;
      }
  }
  
  if (root.right) {
      bfs(root.right, target, results);
      
      if (target.includes(root.right.val)) {
          root.right = null;
      }
  }
}

var delNodes = function(root, to_delete) {
  const results = [];
  
  if (!to_delete.includes(root.val)) {
      results.push(root);
  }
  
  bfs(root, to_delete, results);
  
  return results;
};