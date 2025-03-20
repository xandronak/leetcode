/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Create a dummy node

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const dummyNode = new ListNode(0);
  
  let pointer1 = list1;
  let pointer2 = list2;
  let dummyPointer = dummyNode;

  while(pointer1 || pointer2) {
    if (!pointer1) {
      dummyPointer.next = pointer2;
      break;
    }
    if (!pointer2) {
      dummyPointer.next = pointer1;
      break;
    }

    if (pointer1.val > pointer2.val) {
      const tempNode = pointer2.next;
      pointer2.next = null;
      dummyPointer.next = pointer2;
      pointer2 = tempNode;
    } else {
      const tempNode = pointer1.next;
      pointer1.next = null;
      dummyPointer.next = pointer1;
      pointer1 = tempNode;
    }

    dummyPointer = dummyPointer.next;
  }

  return dummyNode.next;
};