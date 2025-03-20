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
var mergeNodes = function(head) {
  if (!head) {
      return head;
  }

  let newHead = null;
  let sum = 0;
  let pointer = head;
  let secondPointer = null;

  while (pointer.next) {
      if (pointer.val) {
          sum += pointer.val;
      }

      if (pointer.next.val === 0 && sum) {
          const nextNode = new ListNode(sum);

          if (!newHead) {
              newHead = nextNode;
              secondPointer = newHead;
          } else {
              secondPointer.next = nextNode;
              secondPointer = secondPointer.next;
          }

          sum = 0;
      }

      pointer = pointer.next;
  }

  return newHead;
};