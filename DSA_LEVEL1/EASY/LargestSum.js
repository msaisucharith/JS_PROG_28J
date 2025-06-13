function LargestSum(arr) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let a of arr) {
    if (a < minPrice) {
      minPrice = a;
    } else {
      maxProfit = Math.max(maxProfit, a);
    }
  }
  return [maxProfit, minPrice];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(LargestSum(arr));
