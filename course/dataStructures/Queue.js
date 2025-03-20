class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty) {
      throw new Error('Queue is empty');
    }

    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.last) {
      this.last.next = node;
    } else {
      this.first = node;
    }

    this.last = node;
    this.length++;

    return this;
  }

  dequeue() {
    const firstItem = this.peek();

    if (firstItem.next) {
      this.first = firstItem.next;
    } else {
      this.last = null;
      this.first = null;
    }

    this.length--;

    return this;
  }

  get isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();

queue.enqueue('1').enqueue('2').enqueue('3').dequeue().enqueue('4').enqueue('5').dequeue().dequeue().dequeue().dequeue().dequeue();

console.log(queue);