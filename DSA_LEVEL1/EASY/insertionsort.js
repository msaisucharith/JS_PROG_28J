function Insertionsort(arr) {
  for (let step = 1; step < arr.length; step++) {
    let key = arr[step];
    let j = step - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

let arr = [29, 10, 5, 3, 2];
console.log(Insertionsort(arr));
