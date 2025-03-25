// Max subarray using sliding window

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Maxsubarray(arr, num) {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.lenght; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
