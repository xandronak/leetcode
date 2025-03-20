class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // add a node to the end of a list
  append(value) {
    const node = new Node(value);

    if (this.tail) {
      // link to a existing node
      this.tail.next = node;
    } else {
      // create a first node
      this.head = node;
    }

    this.tail = node;

    this.length = this.length + 1;
  }

  // add a node to the start of a list
  prepend(value) {
    const node = new Node(value);

    if (this.head) {
      // link to a existing node
      node.next = this.head;
    } else {
      // create a first node
      this.tail = node;
    }

    this.head = node;
    this.length = this.length + 1;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }
    
    const node = new Node(value);

    const leaderNode = this.findByIndex(index - 1);
    const nextNode = leaderNode.next;

    node.next = nextNode;
    leaderNode.next = node;

    this.length = this.length + 1;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    if (index > this.length) {
      throw new Error('Index doesn\'t exist');
    }

    const leaderNode = this.findByIndex(index - 1);
    const unwantedNode = leaderNode.next;
    const nextNode = unwantedNode.next;

    leaderNode.next = nextNode;

    this.length = this.length - 1;
  }

  values() {
    const result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  findByIndex(index) {
    let currentNode = this.head;
    let i = 0;

    while(currentNode) {
      if (i === index) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
      i = i + 1;
    }

    throw new Error('Doesn\'t exist');
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;

    this.tail = currentNode;

    while(currentNode) {
      const nextNode = currentNode.next;

      currentNode.next = prevNode;
      prevNode = currentNode;

      currentNode = nextNode;
    }

    this.head = prevNode;
  }
}

const myList = new LinkedList();


myList.append('Node1');
myList.append('Node2');
myList.append('Node3');
myList.append('Node4');
myList.append('Node5');
myList.append('Node6');
myList.append('Node7');
myList.append('Node8');