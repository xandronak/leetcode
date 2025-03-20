/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const refs = [];

  let pointer = head;

  while (pointer) {
    if (refs.find(val => val === pointer)) {
      return true;
    } else {
      refs.push(pointer);
      pointer = pointer.next;
    }
  }

  return false;
};