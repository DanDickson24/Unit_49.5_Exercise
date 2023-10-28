class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class Deque {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }

    addFront(val) {
      const newNode = new Node(val);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        newNode.next = this.front;
        this.front.prev = newNode;
        this.front = newNode;
      }
      this.size++;
    }
  
    addRear(val) {
      const newNode = new Node(val);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        newNode.prev = this.rear;
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.size++;
    }
  
    removeFront() {
      if (this.isEmpty()) {
        throw new Error("Deque is empty");
      }
      const removedValue = this.front.val;
      if (this.size === 1) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.front.next;
        this.front.prev = null;
      }
      this.size--;
      return removedValue;
    }
  
    removeRear() {
      if (this.isEmpty()) {
        throw new Error("Deque is empty");
      }
      const removedValue = this.rear.val;
      if (this.size === 1) {
        this.front = null;
        this.rear = null;
      } else {
        this.rear = this.rear.prev;
        this.rear.next = null;
      }
      this.size--;
      return removedValue;
    }

    peekFront() {
      if (this.isEmpty()) {
        throw new Error("Deque is empty");
      }
      return this.front.val;
    }

    peekRear() {
      if (this.isEmpty()) {
        throw new Error("Deque is empty");
      }
      return this.rear.val;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  }
  
  module.exports = Deque;
  