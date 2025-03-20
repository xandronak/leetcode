// Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  peek() {
    if (this.isEmpty) {
      throw new Error('Stack is empty');
    }

    return this.top;
  }

  push(value) {
    const node = new Node(value);

    if (this.top) {
      node.next = this.top;
    } else {
      this.bottom = node;
    };

    this.top = node;
    this.size++;

    return this;
  }

  pop() {
    const topNode = this.peek();

    if (topNode.next) {
      this.top = topNode.next;
    } else {
      this.top = null;
      this.bottom = null;
    }

    this.size--;

    return this;
  }

  get isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();

stack.push('1').push('2').pop();


// Arrays

class StackOnArray {
  constructor() {
    this.data = [];
  }

  peek() {
    if (this.isEmpty) {
      throw new Error('Stack is empty');
    }

    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }

  get isEmpty() {
    return this.data.length === 0;
  }
}

const stackArray = new StackOnArray();

console.log(stackArray.peek());