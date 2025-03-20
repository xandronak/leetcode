/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// Bult-in JS
// var sortList = function(head) {
//   let sortedValues = [];

//   let currentNode = head;
//   let prevNode = null;

//   while (currentNode) {
//       sortedValues.push(currentNode.val);
//       currentNode = currentNode.next;
//   }

//   sortedValues = sortedValues.sort((a, b) => b - a);

//   for (let i = 0; i < sortedValues.length; i++) {
//     prevNode = new ListNode(sortedValues[i], prevNode);
//   }

//   return prevNode;
// };


// Merge-sort method
function sortList(head) {
  function getMiddle(node) {
    let slow = node;
    let fast = node;

    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  function merge(left, right) {
    const dummyNode = new ListNode(0);

    let leftPointer = left;
    let rightPointer = right;

    let dummyPointer = dummyNode;

    while (leftPointer || rightPointer) {
      if (leftPointer && (!rightPointer || leftPointer.val < rightPointer.val)) {
        dummyPointer.next = leftPointer;
        leftPointer = leftPointer.next;
      } else {
        dummyPointer.next = rightPointer;
        rightPointer = rightPointer.next;
      }
      dummyPointer = dummyPointer.next;
    }

    return dummyNode.next;
  }

  function divideAndMerge(head) {
    if (!head || !head.next) {
      return head;
    }

    if (!head.next.next) {
      const right = head.next;
      head.next = null;

      return merge(head, right);
    }

    const mid = getMiddle(head);
    const rightHead = mid.next;

    mid.next = null;

    const left = divideAndMerge(head);
    const right = divideAndMerge(rightHead);
    return merge(left, right);
  }

  return divideAndMerge(head);
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const node3 = new ListNode(3, null);
const node1 = new ListNode(1, node3);
const node2 = new ListNode(2, node1);
const node4 = new ListNode(4, node2);

console.log(sortList(node4));