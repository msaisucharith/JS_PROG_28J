function Binary(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
  }

  console.log(arr);
}

let arr = [1, 2, 3, 4, 5];
Binary(arr);
