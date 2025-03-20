/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let size = 0;
  let pointer = head;

  while(pointer) {
    size++;
    pointer = pointer.next;
  }

  const indexOfHeadToRemove = size - n;

  if (indexOfHeadToRemove === 0) return head.next;

  pointer = head;

  for (let i = 0; i < indexOfHeadToRemove; i++) {
    if (i + 1 === indexOfHeadToRemove) {
      const tmpNode = pointer.next.next;
      pointer.next = tmpNode;
    }

    pointer = pointer.next;
  }

  return head;
};