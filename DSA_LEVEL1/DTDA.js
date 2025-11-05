// Day 1
// Medium Two Sum (classic)
// Brute force method
// function Twosum(arr, t) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === t) {
//         res.push(i);
//         res.push(j);
//       }
//     }
//   }

//   return res;
// }

// let arr = [2, 7, 11, 15];
// target = 9;

// console.log(Twosum(arr, target));

// using hash map method

// function Twosum(arr, target) {
//   let map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     let comp = target - arr[i];

//     if (map.has(comp)) {
//       return [map.get(comp), i];
//     }

//     map.set(arr[i], i);
//   }

//   return [];
// }

// let arr = [2, 7, 11, 15];
// target = 9;

// console.log(Twosum(arr, target));

// let map = new Map([
//   ["name", "Charith"],
//   ["age", 25],
//   ["city", "Chennai"],
// ]);

// for (let i of map.keys()) {
//   console.log(i);
// }

// function threesum(arr) {
//   arr.sort((a, b) => a - b);
//   let res = [];

//   for (let i = 0; i < arr.length - 2; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) continue;

//     let left = i + 1;
//     let right = arr.length - 1;

//     while (left < right) {
//       let sum = arr[i] + arr[left] + arr[right];

//       if (sum == 0) {
//         res.push([arr[i], arr[left], arr[right]]);

//         while (left < right && arr[left] === arr[left + 1]) left++;
//         while (left < right && arr[right] === arr[right - 1]) right--;
//         left++;
//         right++;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right++;
//       }
//     }
//   }

//   return res;
// }

// let arr = [-1, 0, 1, 2, -1, -4];

// console.log(threesum(arr));

// Day 2

// finding triples

// function triples(arr) {
//   arr.sort((a, b) => a - b);
//   let res = [];

//   for (let i = 0; i < arr.length - 2; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) continue;

//     let left = i + 1;
//     let right = arr.length - 1;

//     while (left < right) {
//       let sum = arr[i] + arr[left] + arr[right];

//       if (sum === 0) {
//         res.push([arr[i], arr[left], arr[right]]);
//         left++;
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }

//   return res;
// }

// let arr = [-1, 0, 1, 2, -1, -4];

// console.log(triples(arr));

//Container With Most Water

function Mostwater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let max;

  while (left < right) {
    let width = right - left;
    let minheight = Math.min(arr[left], arr[right]);
    let area = width * minheight;
    max = Math.max(max, area);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(Mostwater(arr));
