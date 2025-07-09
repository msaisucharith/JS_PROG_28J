function ContainsDuplicates(arr) {
  return !(new Set(arr) !== arr.length);
}

let arr = [1, 2, 3, 4];
console.log(ContainsDuplicates(arr));
