function missingn(arr) {
  let n = arr.length;
  let ex = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  return ex - sum;
}

let arr = [3, 0, 1];
console.log(missingn(arr));
