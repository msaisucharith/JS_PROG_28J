class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function isSumProperty(node) {
  if (!node || (!node.left && !node.right)) {
    return true;
  }

  let leftData = node.left ? node.left.data : 0;
  let rightData = node.right ? node.right.data : 0;

  return (
    root.value === leftData + rightData &&
    isSumProperty(node.left) &&
    isSumProperty(node.right)
  );
}

const root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.right = new Node(2);
