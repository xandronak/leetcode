var isPalindrome = function (head) {
  if (!head.next) return true;

  const length = getLength(head);

  const mid = getMiddle(head);
  const rightSideHead = length % 2 === 0 ? mid.next : new ListNode(mid.val, mid.next);
  mid.next = null;

  let leftPointer = reverseList(head);
  let rightPointer = rightSideHead;

  // O(n)
  while (leftPointer) {
    if (!rightPointer || leftPointer.val !== rightPointer.val) {
      return false;
    }

    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;
  }

  return true;
};

// O(n)
function reverseList(head) {
  if (!head.next) return head;

  let pointer = head;
  let prev = null;

  while (pointer) {
    const tmpNode = pointer.next;

    pointer.next = prev;
    prev = pointer;
    pointer = tmpNode;
  }

  return prev;
}

// O(n)
function getMiddle(node) {
  let slow = node;
  let fast = node;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// O(n)
function getLength(node) {
  let pointer = node;
  let counter = 0;

  while (pointer) {
    pointer = pointer.next;
    counter++;
  }

  return counter;
}