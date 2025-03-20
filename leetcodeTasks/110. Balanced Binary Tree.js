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
 * @return {boolean}
 */

const dfs = (node) => {
  if (!node) return 0;

  let left = dfs(node.left) + 1;
  let right = dfs(node.right) + 1;

  if (Math.abs(left - right) > 1) return Infinity;

  return Math.max(left, right);
}

var isBalanced = function(root) {
  if (!root) {
    return true;
  }

  return dfs(root) === Infinity ? false : true;
};