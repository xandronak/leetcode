/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const dfs = (sum, node, targetSum) => {
  const result = sum + node.val;

  if (!node.left && !node.right && result === targetSum) return true;
  if (node.left && dfs(result, node.left, targetSum)) return true;
  if (node.right && dfs(result, node.right, targetSum)) return true;

  return false;
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false;

  return dfs(0, root, targetSum)
};