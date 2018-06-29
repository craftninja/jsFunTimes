class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(ele) {
    let node = this.createNode(ele);
    if (this.length) {
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }
    this.length++;
  }

  pop() {
    if (this.length) {
      const last = this.last;
      this.last = this.last.prev;
      this.length--;
      return last.item;
    }
  }

  shift() {
    if (this.length) {
      const first = this.first;
      this.first = this.first.next;
      this.length--;
      return first.item;
    }
  }

  unshift(ele) {
    let node = this.createNode(ele);
    if (this.length) {
      this.first.prev = node;
      node.next = this.first;
      this.first = node;
    } else {
      this.first = node;
      this.last = node;
    }
    this.length++;
  }

  delete(ele) {
    let next = this.first;
    let foundNode = null;
    while (next) {
      if (next.item === ele) {
        foundNode = next;
        break;
      } else {
        next = next.next;
      }
    }
    if (foundNode) {
      if (foundNode === this.first) {
        this.shift();
      } else if (foundNode === this.last) {
        this.pop();
      } else {
        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;
        this.length--;
      }
    }
  }

  count() {
    return this.length;
  }

  createNode(ele) {
    return {
      item: ele,
      next: null,
      prev: null
    };
  }
}

module.exports = LinkedList;
