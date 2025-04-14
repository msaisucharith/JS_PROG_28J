function Quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...Quicksort(left), pivot, ...Quicksort(right)];
}

let arr = [100, -2, 9, 10, 15, 2];
console.log(Quicksort(arr));
