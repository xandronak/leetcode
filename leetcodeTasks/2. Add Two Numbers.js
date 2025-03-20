// Link - https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummyNode = new ListNode(0);

  let pointer1 = l1;
  let pointer2 = l2;
  let dummyPointer = dummyNode;
  let carry = false;

  function sumWithCarry(val1, val2) {
      let sum = val1 + val2;

      if (carry) {
          sum = sum + 1;
          carry = false;
      }

      if (sum > 9) {
          sum = sum - 10;
          carry = true;
      }

      return sum;
  }


  while(pointer1 || pointer2 || carry) {
      if (pointer1 || pointer2) {
          const firstValue = pointer1 ? pointer1.val : 0;
          const secondValue = pointer2 ? pointer2.val : 0;

          const sum = sumWithCarry(firstValue, secondValue);

          dummyPointer.next = new ListNode(sum);

          pointer1 = pointer1 ? pointer1.next : null;
          pointer2 = pointer2 ? pointer2.next : null;
          dummyPointer = dummyPointer.next;
      } else {
          carry = false;
          dummyPointer.next = new ListNode(1);
      }
  }

  return dummyNode.next;
};