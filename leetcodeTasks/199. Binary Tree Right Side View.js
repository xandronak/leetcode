/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Using recursion

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  
  const result = [root.val];

  const breadthFirstSearch = (queue) => {
    const childrenQueue = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      if (node.left) childrenQueue.push(node.left);
      if (node.right) childrenQueue.push(node.right);
    }

    if (childrenQueue.length) {
      result.push(childrenQueue[childrenQueue.length - 1].val);
      breadthFirstSearch(childrenQueue);
    } else {
      return;
    }
  }

  breadthFirstSearch([root]);

  return result;
};


// Using Queue

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];

  while(queue.length) {
    let size = queue.length;

    result.push(queue[size - 1].val);

    for (let i = 0; i < size; i++) {
      const node = queue[i];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    queue.splice(0, size);
  }

  return result;
};