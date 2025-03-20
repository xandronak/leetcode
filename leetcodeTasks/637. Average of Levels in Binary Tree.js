/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const breadthFirstSearch = (stack, result) => {
  if (!stack.length) return;

  const childrenStack = [];
  let sum = 0;

  for (let i = 0; i < stack.length; i++) {
    sum += stack[i].val;
    if (stack[i].left) {
      childrenStack.push(stack[i].left)
    }
    if (stack[i].right) {
      childrenStack.push(stack[i].right)
    }
  }

  result.push(sum / stack.length);
  breadthFirstSearch(childrenStack, result);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const result = [];
  breadthFirstSearch([root], result);
  return result;
};