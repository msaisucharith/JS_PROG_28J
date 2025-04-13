function merge(left, right) {
  let sorterd = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorterd.push(left.shift());
    } else {
      sorterd.push(right.shift());
    }
  }

  return [...sorterd, ...left, ...right];
}

function Mergsort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = Mergsort(arr.slice(0, mid));
  let right = Mergsort(arr.slice(mid));

  return merge(left, right);
}

let arr = [5, 3, 101, 23, 32, 99, 1, 4, 23];
console.log(Mergsort(arr));
