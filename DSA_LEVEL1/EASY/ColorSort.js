function ColorSort(arr) {
  let start = 0;
  let mid = 0;
  let end = arr.length - 1;

  while (mid <= end) {
    if (arr[mid] === 0) {
      [arr[start], arr[mid]] = [arr[mid], arr[start]];
      start++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[end]] = [arr[end], arr[mid]];
      end--;
    }
  }
  console.log(arr);
}

let arr = [0, 1, 2, 0, 1, 2, 0, 1];

ColorSort(arr);
