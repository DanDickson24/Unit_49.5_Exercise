// /** Node: node for a queue. */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   enqueue(val) {
//     const newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.size++;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       throw new Error("Queue is empty");
//     }
//     const removedNode = this.first;
//     if (this.size === 1) {
//       this.first = null;
//       this.last = null;
//     } else {
//       this.first = removedNode.next;
//     }
//     this.size--;
//     return removedNode.val;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       throw new Error("Queue is empty");
//     }
//     return this.first.val;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }
// }

// module.exports = Queue;


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
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

class Queue {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  enqueue(val) {
    this._list.addToTail(val);
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const removedValue = this._list.removeHead();
    this.size--;
    return removedValue;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this._list.head.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
