export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addToHead(data) {
    if (this.noRepeatId(data.getId()) == null) {
      return null;
    }
    if (!this.head) {
      this.head = data;
      this.tail = data;
    } else {
      data.next = this.head;
      this.head.prev = data;
      this.head = data;
    }
    this.size++;
  }
  addToTail(data) {
    if (this.noRepeatId(data.getId()) == null) {
      return null;
    }
    if (!this.tail) {
      this.head = data;
      this.tail = data;
    } else {
      data.prev = this.tail;
      this.tail.next = data;
      this.tail = data;
    }
    this.size++;
  }
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.getName() + "<->";
      current = current.next;
    }
    return (result += "X");
  }
  reversePrint() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.getName() + "<->";
      current = current.prev;
    }
    return (result += "X");
  }
  noRepeatId(id) {
    id = Number(id);
    let current = this.head;
    let data = "";
    while (current != null) {
      data = current;
      if (data.getId() === id) {
        return null;
      }
      current = current.next;
    }
    return true;
  }
  insertProductAt(product, index) {
    let tamaño = index;
    index = index - 1;
    if (this.noRepeatId(product.getId()) == null) {
      return null;
    }
    if (index < 0 || tamaño > this.size) {
      return null;
    }
    let current = this.head;
    let prev;
    if (index == 0) {
      product.next = current;
      current.prev = product;
      this.head = product;
      console.log(true);
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
        console.log(true);
      }
      product.next = current;
      product.prev = prev;
      current.prev = product;
      prev.next = product;
      console.log(true);
    }
    this.size++;
  }

  getLinkedList() {
    return this.head;
  }
  getLinkedListRev() {
    return this.tail;
  }

  removeById(id) {
    id = Number(id);
    let current = this.head;
    let prev = null;
    while (current !== null) {
      if (current.getId() === id) {
        if (!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current;
      }
      prev = current;
      current = current.next;
    }
    return null;
  }
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let current = this.head;
    let prev = null;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
    return current;
  }
  browser(id) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current !== null) {
      if (current.getId() == id) return current;
      current = current.next;
    }
    return null;
  }
}
