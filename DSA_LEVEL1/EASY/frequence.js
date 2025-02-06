// counting frequency of number in array

function frequency(arr) {
  const obj_counter = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj_counter[arr[i]]) {
      obj_counter[arr[i]] += 1;
    } else {
      obj_counter[arr[i]] = 1;
    }
  }

  for (const x in obj_counter) {
    console.log(`${x} came ->${obj_counter[x]}`);
  }
}

let arr = [1, 1, 2, 2, 3, 3, 4];
frequency(arr);
