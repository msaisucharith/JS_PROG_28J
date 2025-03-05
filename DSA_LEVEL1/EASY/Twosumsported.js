let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let t = 8;

let s = 0;

let e = arr.length;

while (s < e) {
  let sum = arr[s] + arr[e];
  if (sum == t) {
    console.log([s + 1, e + 1]);
    return;
  } else if (sum <= t) {
    s++;
  } else {
    e--;
  }
}
