/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null;
  if (left === right) return head;

  let position = 1;
  let startPointer = null;
  let pointer = head;
  let headPointer = head;

  const dummyNode = new ListNode(0);

  while (pointer) {
    if (left === 1 && position === left) {
      startPointer = new ListNode(0);
      dummyNode.next = pointer
      headPointer = null;
    }
    if (position + 1 === left) {
      startPointer = pointer;
      dummyNode.next = pointer.next;
    }
    if (position === right) {
      startPointer.next = pointer.next;
      pointer.next = null;
    }

    position++;
    pointer = pointer.next;
  }

  let dummyPointer = dummyNode.next;
  let prev = null;

  while (dummyPointer) {
    const tmpNode = dummyPointer.next;
    dummyPointer.next = prev;
    prev = dummyPointer;
    dummyPointer = tmpNode;
  }

  dummyNode.next.next = startPointer.next;
  startPointer.next = prev;

  if (!headPointer) {
    headPointer = startPointer.next;
  }

  return headPointer
};