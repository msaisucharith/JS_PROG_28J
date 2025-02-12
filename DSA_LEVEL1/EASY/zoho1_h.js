let e = 2;
let o = 1;

for (let i = 1; i < 7; i++) {
  for (let j = 1; j < i; j++) {
    if (i % 2 !== 0) {
      console.log(o);
      o = o + 2;
    } else {
      console.log(e);
      e = e + 2;
    }
  }
}
