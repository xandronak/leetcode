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
 
var swapPairs = function(head) {
  if (!head || !head.next) {
      return head;
  }

  let newHead = head.next;
  let pointer = head;

  pointer.next = newHead.next;
  newHead.next = pointer;

  while (pointer?.next?.next) {
      const temp = pointer.next;
      const nextTemp = pointer.next.next;
      
      pointer.next = nextTemp;
      temp.next = nextTemp.next;
      nextTemp.next = temp;

      pointer = temp;
  }

  return newHead;
};