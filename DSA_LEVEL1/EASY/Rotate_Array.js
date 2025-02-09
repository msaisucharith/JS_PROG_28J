// Rotate array

const revNum = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

function Rotate(nums, k) {
  k = k % nums.length;

  nums.reverse();
  revNum(nums, 0, k - 1);
  revNum(nums, k, nums.length - 1);

  return nums;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;

console.log(Rotate(arr, k));
