class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(head) {
    this.head = head;
    this.size = 0;
  }

  insert(value, index) {
    let node = new Node(value);
    if (this.size == 0) {
      this.node = this.head;
    }
  }

  printlist() {
    if (this.size == 0) {
      return "List is empty";
    } else {
    }
  }
}

let list = new Linkedlist();
console.log(list);
