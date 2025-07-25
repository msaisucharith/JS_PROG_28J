const ProductofArrayExceptSelf = function (nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  let ans = new Array(n).fill(1);

  // prefix

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    ans[i] = prefix[i] * suffix[i];
  }

  return ans;
};

let nums = [1, 2, 3, 4];
console.log(ProductofArrayExceptSelf(nums));
