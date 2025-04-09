function binarySer(arr, t) {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] < t) {
      s = mid + 1;
    } else if (arr[mid] > t) {
      e = mid - 1;
    } else if (arr[mid] == t) {
      return t;
    }
  }

  return -1;
}

let arr = [1, 3, 5, 6, 8, 9, 10, 12, 15, 18, 19];
let t = 3;

console.log(binarySer(arr, t));
