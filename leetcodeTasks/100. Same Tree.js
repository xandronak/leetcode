/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const depthFirstSearch = (node1, node2) => {
  if ((node1 && !node2) || (node2 && !node1)) return false;
  if (!node1 && !node2) return true;
  if (node1.val !== node2.val) return false;

  const leftResult = depthFirstSearch(node1.left, node2.left);
  const rightResult = depthFirstSearch(node1.right, node2.right);

  return leftResult && rightResult;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return depthFirstSearch(p, q)
};