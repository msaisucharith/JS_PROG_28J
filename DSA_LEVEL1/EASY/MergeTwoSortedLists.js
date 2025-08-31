function mergeTwoLists(list1, list2) {
  let out = [];

  while (list1.length > 0 && list2.length > 0) {
    if (list1[0] === list2[0]) {
      out.push(list1.shift());
      out.push(list2.shift());
    } else if (list1[0] < list2[0]) {
      out.push(list1.shift());
    } else {
      out.push(list2.shift());
    }
  }

  return out;
}

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));
