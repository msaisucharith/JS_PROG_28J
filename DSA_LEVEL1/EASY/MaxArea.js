function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const heightLeft = height[left];
    const heightRight = height[right];
    const minHeight = Math.min(heightLeft, heightRight);
    const width = right - left;
    const currentArea = minHeight * width;

    maxWater = Math.max(maxWater, currentArea);

    // Move the pointer pointing to the shorter line
    if (heightLeft < heightRight) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
