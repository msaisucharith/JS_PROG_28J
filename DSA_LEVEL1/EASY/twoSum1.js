function twoSum1(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let total = numbers[left] + numbers[right];

    if (total === target) {
      return [left + 1, right + 1];
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }
}

let numbers = [2, 7, 11, 15];
let target = 9;

console.log(twoSum1(numbers, target));
