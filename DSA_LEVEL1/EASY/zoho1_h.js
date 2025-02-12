let e = 2;
let o = 1;

let sto = "";

for (let i = 1; i < 7; i++) {
  for (let j = 1; j < i; j++) {
    if (i % 2 !== 0) {
      sto += o;
      o = o + 2;
    } else {
      sto += e;
      e = e + 2;
    }
  }
  sto += "\n";
}

console.log(sto);
