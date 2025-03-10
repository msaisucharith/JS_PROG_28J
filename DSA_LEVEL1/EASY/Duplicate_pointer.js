function duplicate(arr) {
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (k == 0 || arr[i] != arr[k - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }
  return k;
}

let arr = [1, 1, 2, 2, 3, 4];
console.log(duplicate(arr));
