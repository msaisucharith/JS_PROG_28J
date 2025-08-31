class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (list1, list2) {
  let dumyNode = new ListNode(-1);
  let temp = dumyNode;

  let curr1 = list1;
  let curr2 = list2;

  while (curr1.next !== null && curr2.next !== null) {
    if (curr1.va1 < curr2.va1) {
      temp.next = curr1;
      curr1 = curr1.next;
    } else {
      temp.next = curr2;
      curr2 = curr2.next;
    }
  }
};
