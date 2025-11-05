function FlattenArray(arr) {
  let dup = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      dup = FlattenArray(arr[i]);
      for (let j = 0; j < dup.length; j++) {
        result.push(dup[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, [2, [3, 4], 5], 6];
console.log(FlattenArray(arr));
