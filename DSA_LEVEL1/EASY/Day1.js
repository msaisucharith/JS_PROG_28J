// Find a target

function Target(arr, t) {
  let windowStart = 0;
  let currentsum = 0;

  for (let windowEnd = 0; windowEnd <= arr.length; windowEnd++) {
    currentsum += arr[windowEnd];

    while (currentsum > t && windowStart <= windowEnd) {
      currentsum -= arr[windowStart];
      windowStart++;
    }

    if (currentsum === t) {
      return true;
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let t = 10;

console.log(Target(arr, t));
