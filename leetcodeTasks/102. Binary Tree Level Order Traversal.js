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
 * @return {number[][]}
 */

const bfs = (queue, result) => {
  const values = [];
  const children = [];

  for (const node of queue) {
    if (node.left) {
      children.push(node.left);
    }
    if (node.right) {
      children.push(node.right);
    }
    values.push(node.val);
  }

  result.push(values);

  if (children.length) {
    return bfs(children, result);
  }

  return result;
}

var levelOrder = function(root) {
  const result = [];
  const queue = [];
  
  if (!root) {
    return result;
  }

  return bfs([root], result);
};


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
 * @return {number[][]}
 */

var levelOrder = function(root) {
  const result = [];
  
  if (!root) {
    return result;
  }

  const queue = [root];

  while (queue.length) {
    const queueLength = queue.length;
    const temp = [];

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();
  
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      temp.push(node.val);
    }

    result.push(temp);
  }

  return result;
};