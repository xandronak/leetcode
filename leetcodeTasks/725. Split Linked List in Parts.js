/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  let pointer = head;
  let length = 0;

  while (pointer) {
      length += 1;
      pointer = pointer.next;
  }

  const result = new Array(k).fill(null);
  const arrayLength = length > k ? Math.floor(length / k) : 1;
  let remain = length > k ? length % k : 0;

  let groupIndex = 0;
  let itemIndex = 0;
  let resultPointer = null;
  let listPointer = head;

  while (groupIndex < k) {
      const length = remain > 0 ? arrayLength + 1 : arrayLength;

      if (listPointer && (!result[groupIndex] || itemIndex < length)) {
          const node = new ListNode(listPointer.val);

          if (resultPointer) {
              resultPointer.next = node;
          } else {
              result[groupIndex] = node;
          }

          itemIndex += 1;
          listPointer = listPointer?.next;
          resultPointer = node;
      } else {
          if (remain > 0) {
              remain -= 1;
          }

          groupIndex += 1;
          itemIndex = 0;
          resultPointer = result[groupIndex];
      }
  }

  return result
};