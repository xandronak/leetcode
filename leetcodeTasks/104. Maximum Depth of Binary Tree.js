/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const checkChildren = (queue, level) => {
  const childrenQueue = [];

  for (let i = 0; i < queue.length; i++) {
    if (queue[i].left) childrenQueue.push(queue[i].left)
    if (queue[i].right) childrenQueue.push(queue[i].right)
  }

  if (childrenQueue.length) {
    return checkChildren(childrenQueue, level + 1);
  } else {
    return level;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;

  return checkChildren([root], 1)
};