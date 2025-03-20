// This is the class of the input linked list.
class LinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function getListLength(head) {
  let counter = 0;
  let pointer = head;
  
  while(pointer) {
    counter++;
    pointer = pointer.next;
  }

  return counter;
}

function shiftLinkedList(head, k) {
  debugger;
  const length = getListLength(head);

  let counter = 0;
  let pointer = head;
  let prev = null;
  let newHead = null;

  const indexOfNode = length - k;

  if (indexOfNode === 0) return head;
  
  while(pointer) {
    if (counter === indexOfNode) {
      newHead = pointer;
      prev.next = null;
    }

    if (!pointer.next) {
      pointer.next = head;
      break;
    }

    counter++;
    prev = pointer;
    pointer = pointer.next;
  }

  return newHead;
}

const node5 = new LinkedList(5);
const node4 = new LinkedList(4, node5);
const node3 = new LinkedList(3, node4);
const node2 = new LinkedList(2, node3);
const node1 = new LinkedList(1, node2);
const node0 = new LinkedList(0, node1);

shiftLinkedList(node0, 3);