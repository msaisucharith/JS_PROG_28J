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
      this.head = node;
    }
  }

  printlist() {
    if (this.size == 0) {
      return "List is empty";
    } else {
      let value = "";
      let current = this.head;

      while (current) {
        value += `${current.value}`;
        current = current.next;
      }
      return value;
    }
  }
}

let list = new Linkedlist();
list.insert(0);
list.insert(1);
console.log(list.printlist());
