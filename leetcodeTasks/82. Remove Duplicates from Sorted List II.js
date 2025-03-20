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
var deleteDuplicates = function(head) {
  let pointer = head;
  let newHead = head;
  
  let prev = null;
  let deleteValue = null;

  while(pointer) {
    if ((pointer.next && pointer.val === pointer.next.val) || deleteValue === pointer.val) {
      deleteValue = pointer.val;

      if (!prev) {
        newHead = pointer.next;
        pointer = pointer.next;
      } else {
        prev.next = pointer.next;
        pointer = pointer.next;
      }
    } else {
      prev = pointer;
      pointer = pointer.next;
    }
  }

  return newHead;
};