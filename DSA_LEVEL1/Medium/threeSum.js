function threeSum(nums) {
  let ans = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          if (nums[j] === nums[j - 1] && j < k) {
            j++;
          }
        }
      }
    }
  }

  return ans;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
