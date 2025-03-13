// Two sum using two pointer

function Twosum(arr, t) {
  arr.sort((a, b) => a - b);
  let left = 0;

  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === t) {
      return true;
    } else if (sum < t) {
      left++;
    } else {
      right++;
    }
  }

  return false;
}

let arr = [1, 2, 3, 4, 5, 6];

let t = 10;

console.log(Twosum(arr, t));
