class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let pointer = this.root;
      
      while(pointer) {
        const direction = pointer.value > node.value ? 'left' : 'right';
        const nextNode = pointer[direction];
        
        if (!nextNode) {
          pointer[direction] = node;
        }

        pointer = nextNode;
      }
    }

    return this;
  }

  lookup(value) {
    let pointer = this.root;
      
    while(pointer) {
      if (pointer.value === value) {
        break;
      }

      const direction = pointer.value > value ? 'left' : 'right';
      const nextNode = pointer[direction];

      pointer = nextNode;
    }

    if (!pointer) {
      throw new Error('Can\'t find value');
    }

    return pointer;
  }

  remove(value) {
    let pointer = this.root;
    let prevNode = null;
    let prevDirection = null;
      
    while(pointer) {
      if (pointer.value === value) {
        if (pointer.left && pointer.right) {
          // if has 2 children
          prevNode[prevDirection] = pointer.left;
          prevNode[prevDirection].right = pointer.right;
        } else if ((pointer.left)) {
          // if has only one child at left
          prevNode[prevDirection] = pointer.left;
        } else if (pointer.right) {
          // if has only one child at right
          prevNode[prevDirection] = pointer.right;
        } else {
          // if doesn't have children
          prevNode[prevDirection] = null;
        }

        break;
      }

      const direction = pointer.value > value ? 'left' : 'right';
      const nextNode = pointer[direction];

      if (nextNode.value === value) {
        prevNode = pointer;
        prevDirection = direction;
      }

      pointer = nextNode;
    }

    return this;
  }
}

const binaryTree = new BinaryTree();

binaryTree.insert(1024);
binaryTree.insert(512);
binaryTree.insert(1536);
binaryTree.insert(256);
binaryTree.insert(768);
binaryTree.insert(1280);
binaryTree.insert(1792);

console.log(binaryTree);
