/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const map = new Map();
  const dummyNode = new Node(0);

  let pointer = head;
  let dummyPointer = dummyNode;

  while(pointer) {
    const newNode = new Node(pointer.val);

    // save new node in map
    map.set(pointer, newNode);

    dummyPointer.next = newNode;
    dummyPointer = dummyPointer.next;
    pointer = pointer.next;
  }

  pointer = head;
  dummyPointer = dummyNode.next;

  while(pointer) {
    if (pointer.random) {
      dummyPointer.random = map.get(pointer.random);
    }

    pointer = pointer.next;
    dummyPointer = dummyPointer.next;
  }

  return dummyNode.next;
};