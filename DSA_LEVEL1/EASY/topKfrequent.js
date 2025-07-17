function topKFrequent(nums, k) {
  let mp = new Map();

  for (let num of nums) {
    mp.set(num, (mp.get(num) || 0) + 1);
  }

  let temp = [];
  for (let [count, fre] of mp) {
    temp.push([count, fre]);
  }

  temp.sort((a, b) => b[0] - a[0]);

  return temp.slice(0, k).map((it) => it[1]);
}

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(topKFrequent(nums, k));
