var reorderList = function (head) {
  if (!head || !head.next) return;

  // Step 1: Find the middle
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half
  let secondHalf = slow.next;
  slow.next = null; // split the list
  let prev = null;
  while (secondHalf) {
    let temp = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = temp;
  }

  // Step 3: Merge two halves
  let firstHalf = head;
  while (prev) {
    let temp1 = firstHalf.next;
    let temp2 = prev.next;
    firstHalf.next = prev;
    prev.next = temp1;
    firstHalf = temp1;
    prev = temp2;
  }
};
