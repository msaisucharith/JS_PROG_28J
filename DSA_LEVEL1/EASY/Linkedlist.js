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

  isEmpty() {
    return this.size == 0;
  }

  MiddeleNode() {
    let mid = Math.floor(this.size / 2);
    let prev = this.head;

    for (let i = 0; i < mid - 1; i++) {
      prev = prev.next;
    }

    return prev.value;
  }

  ReverseLinked() {
    let prev = null;
    let cur = this.head;
    let next;

    while (cur !== null) {
      next = cur.next;

      cur.next = prev;

      prev = cur;
      cur = next;
    }

    this.head = prev;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insert(value, index) {
    let node = new Node(value);
    if (this.size == 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  printlist() {
    if (this.size == 0) {
      return "List is empty";
    } else {
      let value = "";
      let current = this.head;

      while (current) {
        value += `${current.value}${" "}`;
        current = current.next;
      }
      return value;
    }
  }
}

let list = new Linkedlist();
list.insert(1, 0);
list.insert(2, 1);
list.insert(3, 2);

console.log(list.printlist());
console.log(list.ReverseLinked());
console.log(list.printlist());
console.log(list.MiddeleNode());
