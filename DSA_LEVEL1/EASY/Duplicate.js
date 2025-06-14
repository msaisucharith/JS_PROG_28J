let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];

function Duplicate(arr) {
  let sto = {};

  for (a of arr) {
    if (sto[a]) {
      sto[a] += 1;
    } else {
      sto[a] = 1;
    }
  }

  for (let i in sto) {
    if (sto[i] < 2) {
      return "one one";
    }
  }

  return "all two";
}

console.log(Duplicate(arr));
