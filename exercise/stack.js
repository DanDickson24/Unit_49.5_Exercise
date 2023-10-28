// /** Node: node for a stack. */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// class Stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }


//   push(val) {
//     const newNode = new Node(val);
//     if (!this.top) {
//       this.top = newNode;
//     } else {
//       newNode.next = this.top;
//       this.top = newNode;
//     }
//     this.size++;
//   }


//   pop() {
//     if (this.isEmpty()) {
//       throw new Error("Stack is empty");
//     }
//     const removedNode = this.top;
//     this.top = removedNode.next;
//     this.size--;
//     return removedNode.val;
//   }


//   peek() {
//     if (this.isEmpty()) {
//       throw new Error("Stack is empty");
//     }
//     return this.top.val;
//   }


//   isEmpty() {
//     return this.size === 0;
//   }
// }

// module.exports = Stack;


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  removeHead() {
    if (this.isEmpty()) {
      throw new Error("LinkedList is empty");
    }
    const removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    return removedNode.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  push(val) {
    this._list.addToHead(val);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const removedValue = this._list.removeHead();
    this.size--;
    return removedValue;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this._list.head.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
