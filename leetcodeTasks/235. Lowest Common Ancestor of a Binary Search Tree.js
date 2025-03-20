/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const dfs = (node, value, path) => {
  if (!node) return null;

  const newPath = [...path, node];

  if (node.val === value) {
    return newPath;
  }
  
  const leftPath = dfs(node.left, value, newPath);
  const rightPath = dfs(node.right, value, newPath);

  return leftPath ?? rightPath;
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const firstPath = dfs(root, p, []);
  const secondPath = dfs(root, q, []);
  
  for (let i = firstPath.length; i >= 0; i--) {
    if (secondPath.includes(firstPath[i])) {
      return firstPath[i];
    }
  }
};


function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const node0 = new TreeNode(0);
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);
const node4 = new TreeNode(4, node3, node5);
const node2 = new TreeNode(2, node0, node4);
const node7 = new TreeNode(7);
const node9 = new TreeNode(9);
const node8 = new TreeNode(8, node7, node9);
const node6 = new TreeNode(6, node2, node8);

console.log(lowestCommonAncestor(node6, 0, 5));