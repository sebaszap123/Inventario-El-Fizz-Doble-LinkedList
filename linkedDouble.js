class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addToHead(data) {
    const newNode = new Node(data, this.head, null);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  addToTail(data) {
    const newNode = new Node(data, null, this.tail);
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + "<->";
      current = current.next;
    }
    return (result += "X");
  }
  reversePrint() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.data + "<->";
      current = current.next;
    }
    return (result += "X");
  }
}

const D2LinkedList = new DoubleLinkedList();
D2LinkedList.addToHead(3);
D2LinkedList.addToHead(6);
D2LinkedList.addToHead(9);
D2LinkedList.addToTail(2);
D2LinkedList.addToTail(4);
D2LinkedList.addToTail(8);
console.log(D2LinkedList.print());
