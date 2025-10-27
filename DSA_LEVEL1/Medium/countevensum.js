class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function countEvenSum(root, count = 0) {
  if (!root) {
    return 0;
  }

  count += root.data;

  if (!root.left && !root.right) {
    return count % 2 === 0 ? 1 : 0;
  }

  return countEvenSum(root.left) + countEvenSum(root.right);
}

const root = new Node(5);
root.left = new Node(3);
root.right = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.right = new Node(7);

console.log(countEvenSum(root)); // Output: 2
