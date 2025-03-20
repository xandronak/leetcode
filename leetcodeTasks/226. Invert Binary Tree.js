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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null;

  const queue = [root];

  while(queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue[i];

      if (node.right) {
        queue.push(node.right);
      }
      if (node.left) {
        queue.push(node.left);
      }

      [node.right, node.left] = [node.left, node.right];
    };

    queue.splice(0, size);
  }

  return root;
};