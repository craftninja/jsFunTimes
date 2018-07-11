class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.current = null;
    this.prev = null;
    this.length = 0;
  }
  push(value) {
    let node = this.node(value);
    if (this.head == null) {
      node.next = null;
      this.last = node;
      this.current = node;
      this.head = node;
    } else {
      this.current.next = node;
      this.last = node;
      this.last.prev = this.current;
      this.current = node;
    }
    this.length++;
  }

  pop() {
    if (this.head != null) {
      const last = this.last;
      this.last = this.last.prev;
      this.current = this.last;
      this.length--;
      return last.data;
    }
  }

  shift() {
    if (this.head != null) {
      const head = this.head;
      this.head = this.head.next;
      this.length--;
      return head.data;
    }
  }

  unshift(value) {
    let node = this.node(value);
    if (this.head != null) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.last = node;
    }
    this.length++;
  }

  delete(value) {
    let nodeToDelete = null;
    let node = this.node(value);
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        nodeToDelete = currentNode;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (nodeToDelete) {
      if (nodeToDelete === this.head) {
        this.shift();
      } else if (nodeToDelete === this.last) {
        this.pop();
      } else {
        nodeToDelete.prev.next = nodeToDelete.next;
        nodeToDelete.next.prev = nodeToDelete.prev;
        this.length--;
      }
    }
  }

  count() {
    return this.length;
  }

  node(value) {
    return {
      data: value,
      prev: null,
      next: null
    };
  }
}

module.exports = LinkedList;
